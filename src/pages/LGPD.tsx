import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LGPD = () => {
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
                            LGPD
                        </h1>

                        <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
                            <p className="text-lg font-medium text-foreground">
                                Conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                            </p>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">O que é a LGPD?</h2>
                                <p>
                                    A Lei Geral de Proteção de Dados Pessoais (LGPD) dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Transparência no Tratamento</h2>
                                <p>
                                    Na Alcance Imports, tratamos seus dados com base em fundamentos legais como consentimento, cumprimento de obrigação legal ou execução de contrato. Garantimos a transparência sobre quais dados são coletados e para quais finalidades.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Seus Direitos como Titular</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Confirmação da existência de tratamento;</li>
                                    <li>Acesso aos dados;</li>
                                    <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                                    <li>Eliminação dos dados pessoais tratados com o consentimento do titular;</li>
                                    <li>Informação sobre a possibilidade de não fornecer consentimento e as consequências da negativa.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-foreground mb-4">Contato do Encarregado (DPO)</h2>
                                <p>
                                    Para exercer seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado de Proteção de Dados através do e-mail: <a href="mailto:dpo@alcanceimports.com.br" className="text-primary font-medium hover:underline">dpo@alcanceimports.com.br</a>.
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

export default LGPD;
