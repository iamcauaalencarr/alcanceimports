import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background relative">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container-narrow relative">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute -top-16 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors group z-50"
                        aria-label="Voltar para home"
                    >
                        <X size={24} className="text-foreground group-hover:scale-110 transition-transform" />
                    </button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-display">
                            Termos de Uso
                        </h1>

                        <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                                <p>
                                    Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso do Site</h2>
                                <p>
                                    O conteúdo deste site é para sua informação geral e uso apenas. Ele está sujeito a alterações sem aviso prévio. É proibido o uso indevido deste site para fins ilegais ou não autorizados.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriedade Intelectual</h2>
                                <p>
                                    Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita ao design, layout, aparência e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitação de Responsabilidade</h2>
                                <p>
                                    A Alcance Imports não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar os serviços ou o site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Lei Regente</h2>
                                <p>
                                    O uso deste site e qualquer disputa decorrente de tal uso estão sujeitos às leis da República Federativa do Brasil.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
