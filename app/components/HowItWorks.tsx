import { FC } from 'react';
import Link from 'next/link';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
        <span className="text-lg font-semibold">{number}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl">
            Our screening tool is designed to help you understand your child's development and
            connect you with resources if needed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <Step 
            number={1} 
            title="Answer Questions" 
            description="Complete a brief questionnaire about your child's development milestones"
          />
          <Step 
            number={2} 
            title="Get Results" 
            description="Receive immediate feedback based on the responses"
          />
          <Step 
            number={3} 
            title="Find Resources" 
            description="Connect with appropriate resources and support for your child's needs"
          />
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/screening"
            className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start Screening
          </Link>
        </div>
      </div>
    </section>
  );
} 