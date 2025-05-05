"use client";

import { useSearchParams } from 'next/navigation';
import { QuestionForm } from '.';

export default function QuestionsPage() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get('age');
  
  if (!ageGroup) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <p className="text-center text-lg text-red-500 mb-6">
            Age group not selected. Please return to the previous page.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-4">Developmental Screening</h1>
      <p className="text-gray-500 text-center mb-8">
        Answer the following questions about your child's development
      </p>
      
      <QuestionForm ageGroup={ageGroup} />
    </div>
  );
} 