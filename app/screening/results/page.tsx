"use client";

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

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get('age');
  
  // Get the formatted age group label
  const ageGroupLabel = ageGroup ? (ageGroupLabels[ageGroup] || ageGroup) : '';
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-4">Screening Results</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Assessment Complete</h2>
          <p className="text-gray-500">
            Thank you for completing the developmental screening for the <strong>{ageGroupLabel}</strong> age group.
          </p>
        </div>
        
        <div className="bg-yellow-50 rounded-md p-6 mb-8">
          <h3 className="font-medium text-yellow-800 mb-3">Next Steps</h3>
          <p className="text-yellow-700 mb-2">
            This is a placeholder for the actual results and recommendations. In a full implementation:
          </p>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Your responses would be analyzed</li>
            <li>You would receive tailored feedback on your child's development</li>
            <li>Specific resources and recommendations would be provided</li>
            <li>You might be directed to appropriate support services in Singapore</li>
          </ul>
        </div>
        
        <div className="flex justify-between pt-4 border-t border-gray-100">
          <div className="w-full">
            <Link
              href="/screening"
              className="block w-full text-center px-5 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Start New Screening
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 