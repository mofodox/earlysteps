export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
        &copy; {currentYear} EarlySteps. All Rights Reserved.
      </div>
    </footer>
  );
} 