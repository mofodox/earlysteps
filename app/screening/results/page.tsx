"use client";

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, AlertTriangle, AlertCircle, ArrowRight, Clock, Calendar, MapPin, Phone } from 'lucide-react';

// Age group mapping for display - same as in QuestionForm
const ageGroupLabels: Record<string, string> = {
  '0-12-months': '0-12 months',
  '1-2-years': '1-2 years',
  '2-3-years': '2-3 years',
  '3-4-years': '3-4 years',
  '4-5-years': '4-5 years',
  '5-6-years': '5-6 years',
};

type ConcernLevel = 'low' | 'moderate' | 'high';

function ResultsContent() {
  const searchParams = useSearchParams();
  const ageGroup = searchParams.get('age');
  const [concernLevel, setConcernLevel] = useState<ConcernLevel>('low');
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the formatted age group label
  const ageGroupLabel = ageGroup ? (ageGroupLabels[ageGroup] || ageGroup) : '';

  useEffect(() => {
    // In a real implementation, we would retrieve the answers from a database or local storage
    // and perform a proper calculation based on developmental milestones
    const calculateConcernLevel = () => {
      try {
        // Try to get answers from localStorage (this is where QuestionForm would store them)
        const answersJson = localStorage.getItem('screeningAnswers');
        
        if (answersJson) {
          const answers = JSON.parse(answersJson);
          
          // Count the number of "no" answers as a simple way to determine concern level
          // In a real application, this would be a much more sophisticated algorithm
          const noCount = Object.values(answers).filter(answer => answer === 'no').length;
          const totalQuestions = Object.keys(answers).length;
          
          // Calculate percentage of "no" answers
          const noPercentage = (noCount / totalQuestions) * 100;
          
          // Determine concern level based on percentage
          if (noPercentage >= 30) {
            setConcernLevel('high');
          } else if (noPercentage >= 15) {
            setConcernLevel('moderate');
          } else {
            setConcernLevel('low');
          }
        }
      } catch (error) {
        console.error('Error calculating concern level:', error);
        // Default to low concern if there's an error
        setConcernLevel('low');
      }
      
      setIsLoading(false);
    };
    
    calculateConcernLevel();
  }, []);

  // Configure visual elements based on concern level
  const concernConfig = {
    low: {
      bgGradient: 'from-green-50 to-white',
      cardBg: 'bg-white/80',
      statusBg: 'bg-green-100',
      statusText: 'text-green-600',
      statusLabel: 'Low Concern',
      iconBg: 'from-green-400 to-green-500',
      icon: <CheckCircle className="h-12 w-12" />,
      guidance: 'Continue monitoring your child\'s development while providing enriching activities',
      steps: [
        'Continue observing your child\'s developmental progress',
        'Engage in age-appropriate activities that stimulate development',
        'Re-screen after 3–6 months to track progress',
        'Use the provided resources to support your child\'s growth'
      ]
    },
    moderate: {
      bgGradient: 'from-yellow-50 to-white',
      cardBg: 'bg-white/80',
      statusBg: 'bg-yellow-100',
      statusText: 'text-yellow-600',
      statusLabel: 'Moderate Concern',
      iconBg: 'from-yellow-400 to-yellow-500',
      icon: <AlertTriangle className="h-12 w-12" />,
      guidance: 'Some areas may need further evaluation by healthcare professionals',
      steps: [
        'Visit a General Practitioner (GP) or Polyclinic for initial assessment',
        'Request a referral to a Child Development Unit (CDU) or Child Guidance Clinic',
        'Document examples of concerning behaviors (videos, notes, teacher feedback)',
        'Early identification helps address concerns before they escalate'
      ]
    },
    high: {
      bgGradient: 'from-red-50 to-white',
      cardBg: 'bg-white/80',
      statusBg: 'bg-red-100',
      statusText: 'text-red-600',
      statusLabel: 'High Concern',
      iconBg: 'from-red-400 to-red-500',
      icon: <AlertCircle className="h-12 w-12" />,
      guidance: 'Immediate evaluation by developmental specialists is recommended',
      steps: [
        'Book an appointment with a polyclinic for urgent referral to CDU (KKH/NUH)',
        'If finances allow, consider private developmental pediatricians (SBCC, Thomson Paediatric Centre)',
        'Begin the referral process quickly due to potential 6–9 month wait times',
        'Gather detailed observations to share with specialists'
      ]
    }
  };

  const config = concernConfig[concernLevel];
  
  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center overflow-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-10 max-w-md">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <p className="text-center text-lg font-medium text-gray-700 mb-2">
              Analyzing results...
            </p>
            <p className="text-gray-500 text-sm">
              Please wait while we process your screening answers
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`relative bg-gradient-to-b ${config.bgGradient} min-h-screen pb-12`}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200 opacity-40 -z-10"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-yellow-200 opacity-30 -z-10"></div>
      <div className="absolute top-60 right-10 w-16 h-16 rounded-full bg-red-200 opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mt-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Screening Results</h1>
            <div className={`inline-flex items-center justify-center px-4 py-1 rounded-full ${config.statusBg} ${config.statusText} font-medium text-sm mb-4`}>
              {config.statusLabel}
            </div>
          </div>
          
          <div className={`${config.cardBg} backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10`}>
            <div className="text-center mb-10">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${config.iconBg} text-white mb-6 shadow-lg`}>
                {config.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Assessment Complete</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Thank you for completing the developmental screening for the <strong className={config.statusText}>{ageGroupLabel}</strong> age group.
              </p>
            </div>
            
            {/* Results Explanation */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Results Summary</h3>
              <p className="text-gray-600 mb-4">
                Based on your responses, our screening tool has identified a <strong className={config.statusText}>{concernLevel} level of concern</strong> for your child&apos;s development. 
                {concernLevel === 'low' && " This suggests your child is progressing as expected for their age group."}
                {concernLevel === 'moderate' && " This suggests there may be some areas that would benefit from further evaluation."}
                {concernLevel === 'high' && " This suggests that prompt professional evaluation would be beneficial."}
              </p>
            </div>
            
            {/* Recommendations */}
            <div className={`bg-gradient-to-r ${
              concernLevel === 'low' ? 'from-green-50 to-green-100/50' : 
              concernLevel === 'moderate' ? 'from-yellow-50 to-orange-50' : 
              'from-red-50 to-pink-50'
            } rounded-2xl p-8 mb-10 shadow-sm`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  concernLevel === 'low' ? 'bg-green-100 text-green-600' : 
                  concernLevel === 'moderate' ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-red-100 text-red-600'
                }`}>
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Recommended Next Steps</h3>
                  <p className={`${
                    concernLevel === 'low' ? 'text-green-700' : 
                    concernLevel === 'moderate' ? 'text-yellow-700' : 
                    'text-red-700'
                  } mb-4`}>
                    {config.guidance}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4 pl-4">
                {config.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 mt-0.5 rounded-full ${
                      concernLevel === 'low' ? 'bg-green-200' : 
                      concernLevel === 'moderate' ? 'bg-yellow-200' : 
                      'bg-red-200'
                    } flex items-center justify-center flex-shrink-0`}>
                      <span className={`${
                        concernLevel === 'low' ? 'text-green-700' : 
                        concernLevel === 'moderate' ? 'text-yellow-700' : 
                        'text-red-700'
                      } text-sm font-bold`}>{index + 1}</span>
                    </div>
                    <span className={`${
                      concernLevel === 'low' ? 'text-green-700' : 
                      concernLevel === 'moderate' ? 'text-yellow-700' : 
                      'text-red-700'
                    }`}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Singapore-specific Resources */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-10 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Singapore Resources</h3>
                  <p className="text-blue-700 mb-4">
                    The following resources in Singapore can provide additional support:
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {concernLevel === 'low' && (
                  <>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> Development Activities
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Resources for age-appropriate activities</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">HPB's Growth & Development Resources</a>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Development Milestones
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Track developmental milestones</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">HealthHub Child Development</a>
                    </div>
                  </>
                )}
                
                {concernLevel === 'moderate' && (
                  <>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Polyclinics
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Book an appointment for referral</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">SingHealth Polyclinics</a>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Child Development Units
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Specialized assessment centers</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">KKH Child Development Unit</a>
                    </div>
                  </>
                )}
                
                {concernLevel === 'high' && (
                  <>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Urgent Referrals
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Immediate developmental assessment</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">KKH Child Development Unit</a>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Private Specialists
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">Faster access to developmental pediatricians</p>
                      <a href="#" className="text-blue-600 text-sm font-medium hover:underline">SBCC & Thomson Paediatric Centre</a>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="pt-4 grid md:grid-cols-2 gap-4">
              <Link
                href="/"
                className="block text-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all"
              >
                Return to Home
              </Link>
              <Link
                href="/screening"
                className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-lg hover:from-red-600 hover:to-red-700 transition-all hover:scale-105"
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