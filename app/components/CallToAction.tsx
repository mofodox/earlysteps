import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
          <path fill="#FEF2F2" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-red-100 opacity-50 -z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-yellow-100 opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            Ready to support your child's development journey?
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl">
            Our screening tool is quick, confidential, and designed specifically for parents in Singapore to help you make informed decisions about your child's developmental needs.
          </p>
          
          <div className="pt-4">
            <Link
              href="/screening"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-10 text-base font-medium text-white shadow-lg transition-all hover:from-red-600 hover:to-red-700 hover:scale-105 focus-visible:outline-none"
            >
              Start Your Screening Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 