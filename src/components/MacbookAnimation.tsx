import { useRef, useEffect, useState } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface MacbookAnimationProps {
    progress: MotionValue<number>;
}

export function MacbookAnimation({ progress }: MacbookAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [frames, setFrames] = useState<HTMLCanvasElement[]>([]);

    // Total of 122 images (0 to 121)
    const totalFrames = 122;

    // Map scroll progress to image index (opens fully by 60% of scroll)
    const currentIndex = useTransform(progress, [0, 0.6], [0, totalFrames - 1], { clamp: true });

    // Preload and process images for transparency
    useEffect(() => {
        const loadedFrames: HTMLCanvasElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            img.src = `/macbook/image_${i}.png`;
            img.onload = () => {
                // Create an offscreen canvas to process the image
                const offscreen = document.createElement('canvas');
                offscreen.width = img.width;
                offscreen.height = img.height;
                const ctx = offscreen.getContext('2d', { willReadFrequently: true });

                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
                    const data = imageData.data;

                    // Remove white/near-white background
                    for (let j = 0; j < data.length; j += 4) {
                        const r = data[j];
                        const g = data[j + 1];
                        const b = data[j + 2];

                        // If the pixel is very light (near white), make it transparent
                        if (r > 248 && g > 248 && b > 248) {
                            data[j + 3] = 0;
                        }
                    }
                    ctx.putImageData(imageData, 0, 0);
                }

                loadedFrames[i] = offscreen;
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setFrames(loadedFrames);
                }
            };
        }
    }, []);

    // Update main canvas when index or frames change
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (!ctx || !canvas || frames.length < totalFrames) return;

            const index = Math.round(currentIndex.get());
            const frame = frames[index];

            if (frame) {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw processed frame keeping aspect ratio
                const scale = Math.min(canvas.width / frame.width, canvas.height / frame.height);
                const x = (canvas.width / 2) - (frame.width / 2) * scale;
                const y = (canvas.height / 2) - (frame.height / 2) * scale;

                ctx.drawImage(frame, x, y, frame.width * scale, frame.height * scale);
            }
        };

        const unsubscribe = currentIndex.on("change", render);
        render();
        return () => unsubscribe();
    }, [frames, currentIndex]);

    return (
        <div className="relative w-full max-w-5xl mx-auto aspect-[1096/724] px-4 sm:px-0">
            <canvas
                ref={canvasRef}
                width={1096}
                height={724}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none"
            />
            {/* Fallback for loading */}
            {frames.length < totalFrames && (
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-secondary/5 backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
