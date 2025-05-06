import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-200 opacity-60 -z-10"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-green-200 opacity-50 -z-10"></div>
      <div className="absolute top-40 right-10 w-16 h-16 rounded-full bg-red-200 opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="flex flex-col space-y-6 md:col-span-6 order-2 md:order-1 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 leading-tight">
              <span className="text-red-500">Early</span> Steps for Your Child's Development
            </h1>
            <p className="text-xl text-gray-600">
              A simple screening tool to help parents understand their child's developmental milestones in Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              <Link 
                href="/screening"
                className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-red-600 hover:scale-105 focus-visible:outline-none"
              >
                Start Screening
              </Link>
              <Link 
                href="/how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-red-200 bg-white px-8 text-base font-medium text-red-500 shadow-md transition-all hover:bg-red-50 hover:border-red-300 hover:scale-105 focus-visible:outline-none"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[500px] md:col-span-6 rounded-3xl overflow-hidden order-1 md:order-2 shadow-xl transform md:translate-y-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-200/60 to-yellow-200/40 mix-blend-multiply z-10 rounded-3xl"></div>
            <Image
              src="/images/hero-children.jpg"
              alt="Children playing and developing skills"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
          <path fill="#ffffff" d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,213.3C560,203,640,149,720,149.3C800,149,880,203,960,224C1040,245,1120,235,1200,208C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 