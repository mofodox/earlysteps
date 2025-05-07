import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-200 opacity-60 -z-10"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-green-200 opacity-50 -z-10"></div>
        <div className="absolute top-40 right-10 w-16 h-16 rounded-full bg-red-200 opacity-60 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-500">About</span> EarlySteps
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EarlySteps is an NGO movement aimed at assisting parents in understanding their child&apos;s developmental milestones. The initiative aligns with a broader effort to empower parents with knowledge about early childhood development.
            </p>
          </div>

          {/* Vision Statement Section */}
          <div className="max-w-4xl mx-auto mb-20 px-4">
            <div className="relative text-center">
              {/* Large decorative quote mark */}
              <div className="absolute -top-10 left-0 md:left-10 text-red-200 opacity-50" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Our Vision</h2>
              <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
                Our vision is a world where understanding early developmental milestones unlocks every child's innate potential for a bright future.
              </p>
              
              {/* Small red line decoration */}
              <div className="h-1 w-20 bg-red-400 mx-auto mt-8 rounded-full"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16 relative overflow-hidden">
            {/* Subtle decoration in the background */}
            <div className="absolute -right-6 top-0 w-20 h-20 rounded-full bg-red-100 opacity-40 -z-10"></div>
            <div className="absolute -left-6 bottom-0 w-16 h-16 rounded-full bg-yellow-100 opacity-40 -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At EarlySteps, we believe that every child deserves the best start in life. Our mission is to provide
              parents with accessible, easy-to-use tools that help them understand their child's developmental journey
              and connect them with appropriate resources when needed.
            </p>
            <p className="text-gray-600">
              Founded in Singapore, we're committed to supporting parents through the crucial early years of their
              child's development, making developmental screening accessible to all families.
            </p>
          </div>

          {/* Team Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">The Team Behind EarlySteps</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <Image 
                  src="/images/jepp.jpeg" 
                  alt="Hudzaifah Latiff" 
                  fill 
                  className="object-cover" 
                  objectPosition="center" 
                />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Hudzaifah Latiff</h3>
                <p className="text-red-500 font-medium mb-4">Co-Founder & Strategic Partnerships Lead</p>
                <p className="text-gray-600 mb-4">
                Nearly a decade in education & EdTech empowering students, schools, families. Now co-founding an NGO for early ASD screening, ensuring every child&apos;s potential is recognized.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="https://www.linkedin.com/in/hudzaifah-latiff-934478b0/" className="text-gray-500 hover:text-red-500 transition-colors" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <Image 
                  src="/images/khairul-akmal-4.jpeg" 
                  alt="Khairul Akmal"
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Khairul Akmal</h3>
                <p className="text-red-500 font-medium mb-4">Co-Founder & Technology Lead</p>
                <p className="text-gray-600 mb-4">
                    Experienced software developer & UI/UX designer building user-centric experiences. Now founding a Singapore non-profit to help parents with child development using technology.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="https://linkedin.com/in/kaigrammer" className="text-gray-500 hover:text-red-500 transition-colors" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient transition instead of wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The principles that guide our work at EarlySteps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F9F9F9] p-6 rounded-xl transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f03e3e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                We believe developmental screening should be accessible to all families, regardless of background or
                resources.
              </p>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-xl transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f03e3e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Education</h3>
              <p className="text-gray-600">
                We empower parents with knowledge about child development milestones and what to expect at each stage.
              </p>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-xl transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f03e3e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Connection</h3>
              <p className="text-gray-600">
                We connect families with the resources they need to support their child's development journey.
              </p>
            </div>
          </div>
        </div>
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-50 to-white"></div>
      </section>

      {/* Contact Section with gradient background */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-green-200 opacity-40 -z-10"></div>
        <div className="absolute top-10 right-40 w-16 h-16 rounded-full bg-blue-200 opacity-40 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center relative overflow-hidden">
            {/* Subtle decoration in the background */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-red-100 opacity-30 -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions about EarlySteps or want to learn more about our screening tool? We'd love to hear from
              you.
            </p>
            <Link
              href="mailto:contact@earlysteps.sg"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-3 text-white font-medium transition-all hover:bg-red-600 hover:scale-105 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
