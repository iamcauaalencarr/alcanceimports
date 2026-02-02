import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                            Política de Privacidade
                        </h1>

                        <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
                                <p>
                                    A Alcance Imports está comprometida com a proteção de sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Coleta de Dados</h2>
                                <p>
                                    Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone, quando você entra em contato conosco ou solicita informações sobre nossos serviços de importação.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso das Informações</h2>
                                <p>
                                    Utilizamos seus dados para processar suas solicitações, fornecer suporte ao cliente, enviar atualizações sobre seus pedidos e melhorar nossos serviços.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Proteção de Dados</h2>
                                <p>
                                    Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seus Direitos</h2>
                                <p>
                                    De acordo com a LGPD, você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento.
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

export default PrivacyPolicy;
