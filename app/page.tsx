import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhyItMatters } from './components/WhyItMatters';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Navbar />
      <main className="flex-1 pt-0">
        <Hero />
        <HowItWorks />
        <WhyItMatters />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
