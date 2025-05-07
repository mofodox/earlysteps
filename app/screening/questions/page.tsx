"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuestionForm } from '.';

function QuestionsContent() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get('age');
  
  if (!ageGroup) {
    return (
      <div className="h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center overflow-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-red-100 p-8 max-w-md">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-center text-lg text-gray-700 font-medium mb-4">
              Age group not selected
            </p>
            <a href="/screening" className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all hover:scale-105 shadow-md">
              Return to Age Selection
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white h-screen overflow-auto">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-200 opacity-40 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-30 -z-10"></div>
      <div className="absolute top-60 right-20 w-16 h-16 rounded-full bg-red-200 opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 mt-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Developmental Screening</h1>
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-4">
              Answer Questions
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Answer the following questions about your child's development
            </p>
          </div>
          
          <QuestionForm ageGroup={ageGroup} />
        </div>
      </div>
    </div>
  );
}

export default function QuestionsPage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center overflow-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-10 max-w-md">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <p className="text-center text-lg font-medium text-gray-700 mb-2">
              Loading questions...
            </p>
            <p className="text-gray-500 text-sm">
              Please wait while we prepare your screening
            </p>
          </div>
        </div>
      </div>
    }>
      <QuestionsContent />
    </Suspense>
  );
} 