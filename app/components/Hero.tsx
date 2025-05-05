import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Helping You Support Your Child's Development
            </h1>
            <p className="text-lg text-gray-500">
              Answer a few questions. Get guidance. No diagnosis – just early support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link 
                href="/screening"
                className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Screening
              </Link>
              <Link 
                href="/how-it-works"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/hero-children.jpg"
              alt="Children in superhero costumes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 