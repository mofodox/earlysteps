import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StepProps {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const Step: FC<StepProps> = ({ number, title, description, color, icon }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl relative">
      {/* Step number in top-right corner */}
      <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border-2 border-white">
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${color} text-white font-bold text-lg`}>
          {number}
        </div>
      </div>
      
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color} mb-5`}>
        <Image src={icon} alt={title} width={30} height={30} className="text-white filter brightness-0 invert" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
      <div className="absolute -top-10 right-20 w-20 h-20 rounded-full bg-yellow-100 opacity-70 -z-10"></div>
      <div className="absolute bottom-10 left-10 md:left-20 w-16 h-16 rounded-full bg-green-100 opacity-70 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-4">
            Easy Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Our friendly screening tool helps you understand your child's developmental milestones
            and connects you with resources if needed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <Step 
            number={1} 
            title="Answer Questions" 
            description="Complete a brief, age-appropriate questionnaire about your child's development milestones"
            color="bg-blue-500"
            icon="/icons/question.svg"
          />
          <Step 
            number={2} 
            title="Get Results" 
            description="Receive immediate feedback based on your responses with clear visual indicators"
            color="bg-green-500"
            icon="/icons/results.svg"
          />
          <Step 
            number={3} 
            title="Find Resources" 
            description="Connect with appropriate resources and support services in Singapore for your child's needs"
            color="bg-red-500"
            icon="/icons/resources.svg"
          />
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/screening"
            className="inline-flex h-14 items-center justify-center rounded-full bg-red-500 px-10 text-base font-medium text-white shadow-lg transition-all hover:bg-red-600 hover:scale-105 focus-visible:outline-none"
          >
            Start Your Screening Journey
          </Link>
        </div>
      </div>
      
      {/* Bottom curved decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
          <path fill="#F9F9F9" d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,144C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 