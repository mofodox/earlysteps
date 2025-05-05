import Image from 'next/image';

interface BenefitProps {
  title: string;
  description: string;
}

function Benefit({ title, description }: BenefitProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export function WhyItMatters() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Early Screening Matters</h2>
          <p className="text-gray-500 max-w-2xl">
            Early intervention can make a significant difference in a child's development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <Benefit
              title="Early Detection"
              description="Identifying potential developmental concerns early allows for timely support."
            />
            <Benefit
              title="Better Outcomes"
              description="Research shows early intervention leads to better developmental outcomes."
            />
            <Benefit
              title="Peace of Mind"
              description="Understanding your child's development can provide reassurance or direction."
            />
          </div>
          
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/family-meal.jpg"
              alt="Family having a meal together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 