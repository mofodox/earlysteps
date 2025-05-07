"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { createPortal } from 'react-dom';

interface AgeGroup {
  id: string;
  label: string;
}

const ageGroups: AgeGroup[] = [
  { id: '0-12-months', label: '0-12 months' },
  { id: '1-2-years', label: '1-2 years' },
  { id: '2-3-years', label: '2-3 years' },
  { id: '3-4-years', label: '3-4 years' },
  { id: '4-5-years', label: '4-5 years' },
  { id: '5-6-years', label: '5-6 years' },
];

export function ScreeningForm() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      setIsMounted(false);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate available space below the button
      const spaceBelow = viewportHeight - rect.bottom;
      // Maximum height for the dropdown (35vh for mobile, 240px for desktop)
      const maxDropdownHeight = isMobile ? viewportHeight * 0.35 : 240;
      
      // Check if there's enough space below
      const shouldPositionAbove = spaceBelow < maxDropdownHeight && rect.top > maxDropdownHeight;
      
      if (isMobile) {
        // Mobile positioning - centered with fixed width
        setDropdownPosition({
          top: shouldPositionAbove 
            ? rect.top + scrollY - maxDropdownHeight - 5 // Position above with small gap
            : rect.bottom + scrollY + 5, // Position below with small gap
          left: Math.max(10, rect.left + window.scrollX), // Ensure at least 10px from left edge
          width: Math.min(rect.width, window.innerWidth - 20) // Ensure not wider than viewport minus margins
        });
      } else {
        // Desktop positioning
        setDropdownPosition({
          top: shouldPositionAbove
            ? rect.top + scrollY - maxDropdownHeight
            : rect.bottom + scrollY,
          left: rect.left + window.scrollX,
          width: rect.width
        });
      }
    }
  }, [isOpen, isMobile]);

  const handleSelect = (ageGroupId: string) => {
    setSelectedAgeGroup(ageGroupId);
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (selectedAgeGroup) {
      router.push(`/screening/questions?age=${selectedAgeGroup}`);
    }
  };

  const renderDropdown = () => {
    if (!isOpen || !isMounted) return null;

    return createPortal(
      <ul 
        className="z-50 fixed bg-white rounded-xl shadow-xl overflow-y-auto focus:outline-none ring-1 ring-black ring-opacity-5"
        role="listbox"
        style={{ 
          top: `${dropdownPosition.top}px`, 
          left: `${dropdownPosition.left}px`, 
          width: `${dropdownPosition.width}px`,
          maxHeight: isMobile ? '35vh' : '240px', // Use viewport height for mobile
          overflowY: 'auto'
        }}
      >
        {ageGroups.map((ageGroup) => (
          <li
            key={ageGroup.id}
            className={`cursor-pointer select-none relative py-3 px-5 hover:bg-gray-50 transition-colors ${
              selectedAgeGroup === ageGroup.id ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
            }`}
            onClick={() => handleSelect(ageGroup.id)}
            role="option"
            aria-selected={selectedAgeGroup === ageGroup.id}
          >
            {ageGroup.label}
          </li>
        ))}
      </ul>,
      document.body
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 right-20 w-20 h-20 rounded-full bg-yellow-100 opacity-70 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-red-100 opacity-70 -z-10"></div>
      
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
          Step 1 of 3
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Select Child's Age Group</h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Please select the appropriate age group to receive age-specific developmental screening questions
        </p>
      </div>

      <div className="mb-10 max-w-md mx-auto">
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all hover:border-red-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span className={selectedAgeGroup ? 'font-medium' : 'text-gray-500'}>
              {selectedAgeGroup ? 
                ageGroups.find(group => group.id === selectedAgeGroup)?.label : 
                'Select age group'}
            </span>
            <ChevronDown 
              className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {renderDropdown()}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selectedAgeGroup
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedAgeGroup}
          onClick={handleContinue}
        >
          Continue to Questions
        </button>
      </div>
    </div>
  );
} 