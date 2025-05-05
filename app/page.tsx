import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhyItMatters } from './components/WhyItMatters';
import { CallToAction } from './components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyItMatters />
      <CallToAction />
    </>
  );
}
