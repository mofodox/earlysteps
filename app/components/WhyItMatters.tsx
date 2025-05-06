import Image from 'next/image';

interface BenefitProps {
  title: string;
  description: string;
  iconColor: string;
  icon: React.ReactNode;
}

function Benefit({ title, description, iconColor, icon }: BenefitProps) {
  return (
    <div className="flex gap-4 mb-8 items-start">
      <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function WhyItMatters() {
  return (
    <section className="w-full py-16 md:py-28 bg-[#F9F9F9] relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
          <path fill="#FFFFFF" d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,117.3C840,128,960,128,1080,117.3C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-pink-100 opacity-70 -z-0"></div>
      <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-60 -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
            Development Matters
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Early Screening Matters</h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Early intervention can make a significant difference in your child's developmental journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="space-y-2 md:col-span-6 order-2 md:order-1">
            <Benefit
              title="Early Detection & Support"
              description="Identifying potential developmental concerns early allows for timely support and intervention when it matters most."
              iconColor="bg-yellow-100 text-yellow-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <Benefit
              title="Better Long-term Outcomes"
              description="Research shows early intervention leads to better developmental outcomes and can significantly improve your child's quality of life."
              iconColor="bg-green-100 text-green-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              }
            />
            <Benefit
              title="Peace of Mind for Parents"
              description="Understanding your child's development can provide reassurance or clear direction for next steps, reducing uncertainty and anxiety."
              iconColor="bg-blue-100 text-blue-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <Benefit
              title="Tailored Support Resources"
              description="Connect with Singapore's rich network of early intervention services, specially designed for children with diverse developmental needs."
              iconColor="bg-red-100 text-red-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              }
            />
          </div>
          
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl transform md:-translate-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/30 mix-blend-multiply z-10 rounded-3xl"></div>
              <Image
                src="/images/family-meal.jpg"
                alt="Family enjoying quality time together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
          <path fill="#FFFFFF" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 