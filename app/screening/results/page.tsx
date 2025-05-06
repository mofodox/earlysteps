"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Age group mapping for display - same as in QuestionForm
const ageGroupLabels: Record<string, string> = {
  '0-12-months': '0-12 months',
  '1-2-years': '1-2 years',
  '2-3-years': '2-3 years',
  '3-4-years': '3-4 years',
  '4-5-years': '4-5 years',
  '5-6-years': '5-6 years',
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get('age');
  
  // Get the formatted age group label
  const ageGroupLabel = ageGroup ? (ageGroupLabels[ageGroup] || ageGroup) : '';
  
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white h-screen overflow-auto">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-green-200 opacity-40 -z-10"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-yellow-200 opacity-30 -z-10"></div>
      <div className="absolute top-60 right-10 w-16 h-16 rounded-full bg-red-200 opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Screening Results</h1>
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
              Assessment Complete
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Assessment Complete</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Thank you for completing the developmental screening for the <strong className="text-green-600">{ageGroupLabel}</strong> age group.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-10 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-yellow-100 text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-800">Next Steps</h3>
                  <p className="text-yellow-700 mb-4">
                    This is a placeholder for the actual results and recommendations. In a full implementation:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 pl-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 text-sm font-bold">1</span>
                  </div>
                  <span className="text-yellow-700">Your responses would be analyzed</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 text-sm font-bold">2</span>
                  </div>
                  <span className="text-yellow-700">You would receive tailored feedback on your child's development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 text-sm font-bold">3</span>
                  </div>
                  <span className="text-yellow-700">Specific resources and recommendations would be provided</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 text-sm font-bold">4</span>
                  </div>
                  <span className="text-yellow-700">You might be directed to appropriate support services in Singapore</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <Link
                href="/screening"
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-lg hover:from-red-600 hover:to-red-700 transition-all hover:scale-105"
              >
                Start New Screening
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center overflow-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-10 max-w-md">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <p className="text-center text-lg font-medium text-gray-700 mb-2">
              Loading results...
            </p>
            <p className="text-gray-500 text-sm">
              Please wait while we prepare your results
            </p>
          </div>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
} 