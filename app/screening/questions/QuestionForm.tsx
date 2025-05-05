"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuestionsByAgeGroup } from './questionData';

interface Question {
  id: string;
  domain: string;
  text: string;
}

interface Domain {
  name: string;
  description: string;
}

// Age group mapping for display
const ageGroupLabels: Record<string, string> = {
  '0-12-months': '0-12 Months',
  '1-2-years': '1-2 Years',
  '2-3-years': '2-3 Years',
  '3-4-years': '3-4 Years',
  '4-5-years': '4-5 Years',
  '5-6-years': '5-6 Years',
};

const domains: Record<string, Domain> = {
  "grossMotor": {
    name: "Gross Motor",
    description: "Large movements involving arms, legs, feet, or the entire body"
  },
  "fineMotor": {
    name: "Fine Motor",
    description: "Small, precise movements using hands and fingers"
  },
  "language": {
    name: "Language & Communication",
    description: "Understanding and expressing language, both verbal and non-verbal"
  },
  "social": {
    name: "Social & Emotional",
    description: "Interacting with others and managing emotions"
  }
};

export function QuestionForm({ ageGroup }: { ageGroup: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'yes' | 'no' | ''>>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Organize questions by domain
  const questionsByDomain: Record<string, Question[]> = {};
  const allDomains: string[] = [];

  useEffect(() => {
    // Load questions based on age group
    const questionData = getQuestionsByAgeGroup(ageGroup);
    setQuestions(questionData);
    
    // Initialize answers
    const initialAnswers: Record<string, 'yes' | 'no' | ''> = {};
    questionData.forEach((q: Question) => {
      initialAnswers[q.id] = '';
    });
    setAnswers(initialAnswers);
    
    setIsLoading(false);
  }, [ageGroup]);

  // Organize questions by domain once questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      const tempQuestionsByDomain: Record<string, Question[]> = {};
      
      questions.forEach(q => {
        if (!tempQuestionsByDomain[q.domain]) {
          tempQuestionsByDomain[q.domain] = [];
        }
        tempQuestionsByDomain[q.domain].push(q);
      });
      
      // Set initial domain
      const domainKeys = Object.keys(tempQuestionsByDomain);
      if (domainKeys.length > 0 && currentDomain === '') {
        setCurrentDomain(domainKeys[0]);
      }
    }
  }, [questions, currentDomain]);

  // Group questions by domain
  questions.forEach(question => {
    if (!questionsByDomain[question.domain]) {
      questionsByDomain[question.domain] = [];
      allDomains.push(question.domain);
    }
    questionsByDomain[question.domain].push(question);
  });

  const currentQuestions = currentDomain ? questionsByDomain[currentDomain] || [] : [];

  const handleAnswer = (questionId: string, value: 'yes' | 'no') => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleNextDomain = () => {
    const currentDomainIndex = allDomains.indexOf(currentDomain);
    if (currentDomainIndex < allDomains.length - 1) {
      setCurrentDomain(allDomains[currentDomainIndex + 1]);
      window.scrollTo(0, 0);
    } else {
      // Navigate to results page
      handleSubmit();
    }
  };

  const handlePreviousDomain = () => {
    const currentDomainIndex = allDomains.indexOf(currentDomain);
    if (currentDomainIndex > 0) {
      setCurrentDomain(allDomains[currentDomainIndex - 1]);
      window.scrollTo(0, 0);
    }
  };

  const areAllQuestionsAnswered = () => {
    return currentQuestions.every(q => answers[q.id] !== '');
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(answers).every(a => a !== '');
    
    if (allAnswered) {
      // For now, just console log the answers
      console.log('All answers:', answers);
      
      // In a real app, you'd submit the data to your backend
      // Then navigate to a results page
      router.push(`/screening/results?age=${ageGroup}`);
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading questions...</div>;
  }

  // Get formatted age group label
  const formattedAgeGroup = ageGroupLabels[ageGroup] || ageGroup;
  
  // Calculate current step number
  const currentDomainIndex = allDomains.indexOf(currentDomain);
  const totalSteps = allDomains.length;
  const progressPercentage = ((currentDomainIndex + 1) / totalSteps) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-bold">{formattedAgeGroup}</h2>
            <span className="text-sm font-medium">Step {currentDomainIndex + 1} of {totalSteps}</span>
          </div>
          
          {currentDomain && domains[currentDomain] && (
            <h3 className="text-base font-medium text-gray-700 mb-2">
              {domains[currentDomain].name}
            </h3>
          )}
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-red-500 h-2 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-6 mb-6">
          {currentQuestions.map((question, index) => (
            <div key={question.id}>
              <p className="font-medium mb-3">{question.text}</p>
              <div className="flex gap-3">
                <label className="flex items-center space-x-2 py-1.5 px-3 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={question.id}
                    value="yes"
                    checked={answers[question.id] === 'yes'}
                    onChange={() => handleAnswer(question.id, 'yes')}
                    className="w-4 h-4 text-red-500 focus:ring-red-400 border-gray-300"
                  />
                  <span>Yes</span>
                </label>
                
                <label className="flex items-center space-x-2 py-1.5 px-3 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={question.id}
                    value="no"
                    checked={answers[question.id] === 'no'}
                    onChange={() => handleAnswer(question.id, 'no')}
                    className="w-4 h-4 text-red-500 focus:ring-red-400 border-gray-300"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
            {allDomains.indexOf(currentDomain) > 0 ? (
                <button
                type="button"
                onClick={handlePreviousDomain}
                className="px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                >
                Previous
                </button>
            ) : (
                <Link
                href="/screening"
                type="button"
                className="px-4 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                >
                Previous
                </Link>
            )}

            <button
                type="button"
                onClick={handleNextDomain}
                disabled={!areAllQuestionsAnswered()}
                className={`px-4 py-1.5 rounded-md font-medium ${
                areAllQuestionsAnswered()
                    ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
                Next
            </button>
        </div>
      </div>
    </div>
  );
} 