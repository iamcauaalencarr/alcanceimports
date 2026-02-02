import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { HowItWorks } from '@/components/HowItWorks';
import { Security } from '@/components/Security';
import { Testimonials } from '@/components/Testimonials';
import { Stats } from '@/components/Stats';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Security />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
