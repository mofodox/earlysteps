import { ScreeningForm } from './ScreeningForm';

export default function ScreeningPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Developmental Screening</h1>
      <p className="text-gray-500 text-center mb-12">
        Answer a few questions to better understand your child's development
      </p>
      
      <ScreeningForm />
    </div>
  );
} 