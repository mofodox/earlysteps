import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, HelpCircle, MessageCircle } from "lucide-react"

export default function HowItWorks() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
        <div className="absolute -top-10 right-20 w-20 h-20 rounded-full bg-yellow-100 opacity-70 -z-10"></div>
        <div className="absolute top-40 left-10 md:left-20 w-16 h-16 rounded-full bg-pink-100 opacity-70 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-4">
              Easy Process
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How It <span className="text-red-500">Works</span>
            </h1>
            <p className="text-gray-600 max-w-2xl text-lg mb-8">
              Our friendly screening tool helps you understand your child&apos;s developmental milestones
              and connects you with resources if needed. Learn how EarlySteps makes the process simple.
            </p>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
            <path fill="#f5f9ff" d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,144C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-20 md:py-28 bg-[#f5f9ff] relative">
        <div className="absolute top-20 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-60 -z-0"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-green-100 opacity-70 -z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Step-by-Step
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Screening Process</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              EarlySteps makes developmental screening simple, private, and informative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="flex flex-col bg-white rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl relative">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border-2 border-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg">
                  1
                </div>
              </div>
              
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 mb-5">
                <Image src="/icons/question.svg" alt="Complete the Questionnaire" width={30} height={30} className="text-white filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete the Questionnaire</h3>
              <p className="text-gray-600">
                Answer simple questions about your child&apos;s behavior, communication, and physical abilities. The
                questionnaire is age-specific and takes only 5-10 minutes to complete.
              </p>
            </div>
            
            <div className="flex flex-col bg-white rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl relative">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border-2 border-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg">
                  2
                </div>
              </div>
              
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 mb-5">
                <Image src="/icons/results.svg" alt="Receive Instant Results" width={30} height={30} className="text-white filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold mb-3">Receive Instant Results</h3>
              <p className="text-gray-600">
                Get immediate feedback on your child&apos;s developmental progress based on Singapore&apos;s
                developmental milestones standards. Results are presented in an easy-to-understand format.
              </p>
            </div>
            
            <div className="flex flex-col bg-white rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl relative">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border-2 border-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold text-lg">
                  3
                </div>
              </div>
              
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500 mb-5">
                <Image src="/icons/resources.svg" alt="Connect with Resources" width={30} height={30} className="text-white filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect with Resources</h3>
              <p className="text-gray-600">
                If needed, we&apos;ll connect you with appropriate resources, specialists, and support groups in
                Singapore to help your child reach their full potential.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
            <path fill="#FFFFFF" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="w-full py-20 md:py-28 bg-white relative">
        <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-pink-100 opacity-70 -z-0"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-60 -z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
              Development Matters
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Screening</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              EarlySteps evaluates five key developmental domains with questions tailored to your child's age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="space-y-4 md:col-span-6">
              <p className="text-gray-600">
                EarlySteps uses evidence-based screening tools adapted for Singapore&apos;s context. Our questionnaires
                cover five key developmental domains:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Communication:</strong> Language understanding, expression, and social communication
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-green-100 text-green-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Gross Motor:</strong> Large movement skills like walking, jumping, and balance
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Fine Motor:</strong> Hand and finger skills, drawing, and object manipulation
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-purple-100 text-purple-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Problem Solving:</strong> Learning, playing with toys, and cognitive skills
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-red-100 text-red-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Personal-Social:</strong> Self-help skills and interactions with others
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-6">
              <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/30 mix-blend-multiply z-10 rounded-3xl"></div>
                <Image
                  src="/images/child-development.jpg"
                  alt="Child development assessment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
            <path fill="#f5f9ff" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Results Explanation */}
      <section className="w-full py-20 md:py-28 bg-[#f5f9ff] relative">
        <div className="absolute top-20 right-1/4 w-24 h-24 rounded-full bg-yellow-100 opacity-60 -z-0"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-red-100 opacity-70 -z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
              Clear Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Understanding Your Results</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              After completing the questionnaire, you'll receive a detailed report with actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-blue-200/30 mix-blend-multiply z-10 rounded-3xl"></div>
                <Image
                  src="/images/results-dashboard.jpg"
                  alt="Results dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4 md:col-span-6 order-1 md:order-2">
              <p className="text-gray-600">
                After completing the questionnaire, you&apos;ll receive a detailed report that includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Development Score:</strong> How your child is progressing in each domain
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-green-100 text-green-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Milestone Comparison:</strong> Your child&apos;s progress compared to age-appropriate
                    milestones
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-purple-100 text-purple-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Recommendations:</strong> Personalized suggestions for supporting your child&apos;s
                    development
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-red-100 text-red-600 mr-3">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <strong>Resource Links:</strong> Relevant resources specific to your child&apos;s needs
                  </div>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Results are color-coded for easy understanding: Green indicates on-track development, Yellow suggests
                monitoring, and Red indicates areas that may need professional attention.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
            <path fill="#FFFFFF" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-28 bg-white relative">
        <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-blue-100 opacity-70 -z-0"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-yellow-100 opacity-60 -z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Get answers to common questions about EarlySteps and how it can help your family
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-100 text-purple-600">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How accurate is the screening?</h3>
                  <p className="text-gray-600">
                    EarlySteps uses validated screening tools adapted for Singapore&apos;s context. While highly
                    reliable, it&apos;s a screening tool, not a diagnostic assessment. Results should be discussed with
                    healthcare professionals if concerns arise.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">How often should I screen my child?</h3>
                  <p className="text-gray-600">
                    We recommend screening at key developmental stages: 6, 12, 18, 24, 36, 48, and 60 months. Additional
                    screenings can be done if you notice changes in your child&apos;s development.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-green-100 text-green-600">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Is my data secure and private?</h3>
                  <p className="text-gray-600">
                    Yes, we take data privacy seriously. We never store any of our users' data in our application.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-red-100 text-red-600">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">What if the screening shows concerns?</h3>
                  <p className="text-gray-600">
                    If the screening indicates areas of concern, we provide resources and recommendations for next
                    steps, including connecting with appropriate specialists in Singapore. Early intervention is key to
                    the best outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Top wave decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-full h-full">
            <path fill="#FFFFFF" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-red-100 opacity-50 -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-yellow-100 opacity-40 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
              Ready to support your child's development journey?
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl">
              Our screening tool is quick, confidential, and designed specifically for parents in Singapore to help you make informed decisions about your child's developmental needs.
            </p>
            
            <div className="pt-4">
              <Link
                href="/screening"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-10 text-base font-medium text-white shadow-lg transition-all hover:from-red-600 hover:to-red-700 hover:scale-105 focus-visible:outline-none"
              >
                Start Your Screening Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
