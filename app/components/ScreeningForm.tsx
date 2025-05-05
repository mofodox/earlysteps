"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AgeGroup {
  id: string;
  label: string;
}

const ageGroups: AgeGroup[] = [
  { id: '0-12-months', label: '0-12 Months' },
  { id: '1-2-years', label: '1-2 Years' },
  { id: '2-3-years', label: '2-3 Years' },
  { id: '3-4-years', label: '3-4 Years' },
  { id: '4-5-years', label: '4-5 Years' },
  { id: '5-6-years', label: '5-6 Years' },
];

export function ScreeningForm() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (ageGroupId: string) => {
    setSelectedAgeGroup(ageGroupId);
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (selectedAgeGroup) {
      router.push(`/screening/questions?age=${selectedAgeGroup}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Select Age Group</h2>
        <p className="text-gray-500 text-sm">
          Please select the age group for developmental screening
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <button
            type="button"
            className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            {selectedAgeGroup ? 
              ageGroups.find(group => group.id === selectedAgeGroup)?.label : 
              'Select age group'}
            <svg 
              className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {isOpen && (
            <ul 
              className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto focus:outline-none ring-1 ring-black ring-opacity-5"
              role="listbox"
            >
              {ageGroups.map((ageGroup) => (
                <li
                  key={ageGroup.id}
                  className={`cursor-pointer select-none relative py-3 px-4 hover:bg-gray-100 ${
                    selectedAgeGroup === ageGroup.id ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => handleSelect(ageGroup.id)}
                  role="option"
                  aria-selected={selectedAgeGroup === ageGroup.id}
                >
                  {ageGroup.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className={`px-5 py-2 rounded-md font-medium ${
            selectedAgeGroup
              ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedAgeGroup}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
} 