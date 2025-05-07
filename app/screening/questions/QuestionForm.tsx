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
    } else {
      // Navigate to results page
      handleSubmit();
    }
  };

  const handlePreviousDomain = () => {
    const currentDomainIndex = allDomains.indexOf(currentDomain);
    if (currentDomainIndex > 0) {
      setCurrentDomain(allDomains[currentDomainIndex - 1]);
    }
  };

  const areAllQuestionsAnswered = () => {
    return currentQuestions.every(q => answers[q.id] !== '');
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(answers).every(a => a !== '');
    
    if (allAnswered) {
      // Store answers in localStorage for the results page to use
      localStorage.setItem('screeningAnswers', JSON.stringify(answers));
      
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
    <div className="max-w-3xl mx-auto h-full flex flex-col">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-bold">{formattedAgeGroup}</h2>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Step {currentDomainIndex + 1} of {totalSteps}
            </span>
          </div>
          
          {currentDomain && domains[currentDomain] && (
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {domains[currentDomain].name}
            </h3>
          )}

          {currentDomain && domains[currentDomain] && (
            <p className="text-sm text-gray-600 mb-4">
              {domains[currentDomain].description}
            </p>
          )}
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto pr-2 mb-6 max-h-[calc(100vh-350px)]">
          <div className="space-y-6">
            {currentQuestions.map((question, index) => (
              <div key={question.id} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-medium mb-3 text-gray-800">{question.text}</p>
                <div className="flex gap-3">
                  <label className="flex items-center space-x-2 py-2 px-4 rounded-lg border border-gray-200 hover:bg-white hover:border-red-200 cursor-pointer transition-colors">
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
                  
                  <label className="flex items-center space-x-2 py-2 px-4 rounded-lg border border-gray-200 hover:bg-white hover:border-red-200 cursor-pointer transition-colors">
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
        </div>

        <div className="flex justify-between mt-auto pt-4 border-t border-gray-100">
            {allDomains.indexOf(currentDomain) > 0 ? (
                <button
                type="button"
                onClick={handlePreviousDomain}
                className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                >
                Previous
                </button>
            ) : (
                <Link
                href="/screening"
                className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                >
                Back
                </Link>
            )}

            <button
                type="button"
                onClick={handleNextDomain}
                disabled={!areAllQuestionsAnswered()}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                areAllQuestionsAnswered()
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
                {currentDomainIndex < allDomains.length - 1 ? 'Next' : 'Complete'}
            </button>
        </div>
      </div>
    </div>
  );
} 