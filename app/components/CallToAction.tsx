import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to support your child's development?
          </h2>
          <p className="text-gray-500">
            Our screening tool is quick, confidential, and designed to help you make informed decisions about your child's development.
          </p>
          <div className="pt-4">
            <Link
              href="/screening"
              className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Start Screening
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 