'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar/Navbar';

function PackageDetailsPage({ params }) {
  const router = useRouter();
  const { id } = React.use(params); // 👈 Fix: unwrap the params Promise
  const packageId = parseInt(id);

  // Full package data with student visa details
  const allPackages = [
    {
      id: 1,
      country: 'United States',
      price: '$3,500',
      type: 'Student Visa (F-1)',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=90',
      processingTime: '2-4 weeks',
      universities: '500+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'The F-1 Student Visa allows international students to study in the United States at an accredited college, university, seminary, conservatory, academic high school, or language training program. This visa provides the opportunity to pursue academic excellence in one of the world\'s leading education systems.',
      requirements: [
        'Valid passport (minimum 6 months validity)',
        'Letter of acceptance (I-20) from SEVP-certified school',
        'Proof of financial capability (tuition + living expenses)',
        'Academic transcripts and certificates',
        'Standardized test scores (SAT, GRE, GMAT, TOEFL/IELTS)',
        'Completed DS-160 form',
        'SEVIS fee payment receipt',
        'Passport-sized photographs',
        'Bank statements (last 6 months)',
        'Proof of ties to home country'
      ],
      benefits: [
        'Study at top-ranked universities',
        'Optional Practical Training (OPT) - work for 12 months after graduation',
        'STEM OPT extension - additional 24 months for STEM graduates',
        'On-campus employment allowed (up to 20 hours/week)',
        'Transfer between schools possible',
        'Bring dependents (F-2 visa for spouse/children)'
      ],
      whatsIncluded: [
        'University application assistance',
        'Document preparation and review',
        'I-20 processing support',
        'DS-160 form completion help',
        'SEVIS registration guidance',
        'Visa interview preparation',
        'Mock interview sessions',
        'Post-visa arrival guidance',
        'Application status tracking',
        '24/7 expert support'
      ],
      popularUniversities: [
        'Harvard University',
        'Stanford University',
        'MIT',
        'UC Berkeley',
        'Columbia University',
        'New York University'
      ]
    },
    {
      id: 2,
      country: 'United Kingdom',
      price: '$2,800',
      type: 'Student Visa (Tier 4)',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200&q=90',
      processingTime: '3 weeks',
      universities: '300+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'The UK Student Visa allows you to study at a UK higher education institution. Experience world-class education in historic universities while exploring British culture and heritage.',
      requirements: [
        'Valid passport',
        'Confirmation of Acceptance for Studies (CAS) from licensed institution',
        'Proof of English language proficiency (IELTS/TOEFL)',
        'Financial evidence (tuition fees + £1,334/month living costs in London, £1,023/month outside London)',
        'Academic qualifications and transcripts',
        'TB test results (if from certain countries)',
        'Immigration Health Surcharge payment',
        'Biometric information',
        'Consent letter (if under 18)'
      ],
      benefits: [
        'Study at prestigious Russell Group universities',
        'Post-Study Work Visa - 2 years for bachelors/masters, 3 years for PhD',
        'Work up to 20 hours/week during term time',
        'Full-time work during holidays',
        'Bring dependents',
        'Access to NHS healthcare'
      ],
      whatsIncluded: [
        'University selection guidance',
        'UCAS application support',
        'CAS letter processing',
        'Financial document preparation',
        'Visa application form completion',
        'Biometric appointment booking',
        'Interview coaching',
        'Accommodation guidance',
        'Pre-departure orientation',
        'Dedicated case officer'
      ],
      popularUniversities: [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'LSE',
        'University College London',
        'University of Edinburgh'
      ]
    },
    {
      id: 3,
      country: 'Canada',
      price: '$3,200',
      type: 'Study Permit',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=90',
      processingTime: '4-8 weeks',
      universities: '200+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'The Canada Study Permit allows international students to study at designated learning institutions (DLIs) in Canada. Benefit from high-quality education, multicultural environment, and pathways to permanent residence.',
      requirements: [
        'Valid passport',
        'Letter of acceptance from DLI',
        'Proof of financial support (CAD $10,000 per year + tuition)',
        'Statement of Purpose',
        'Academic transcripts',
        'Language test results (IELTS/TOEFL)',
        'Medical examination (if required)',
        'Police certificate',
        'Biometrics',
        'Proof of no criminal record'
      ],
      benefits: [
        'Post-Graduation Work Permit (PGWP) - up to 3 years',
        'Pathway to permanent residence',
        'Work up to 20 hours/week during studies',
        'Full-time work during breaks',
        'Spouse can get open work permit',
        'Children can study tuition-free in public schools',
        'Co-op and internship opportunities'
      ],
      whatsIncluded: [
        'Institution selection assistance',
        'Letter of acceptance support',
        'GIC account setup guidance',
        'Study permit application',
        'Statement of Purpose drafting',
        'Document verification',
        'Biometric guidance',
        'Medical exam coordination',
        'Port of entry preparation',
        'Settlement services info'
      ],
      popularUniversities: [
        'University of Toronto',
        'McGill University',
        'UBC',
        'University of Waterloo',
        'McMaster University',
        'University of Alberta'
      ]
    },
    {
      id: 4,
      country: 'Australia',
      price: '$3,800',
      type: 'Student Visa (Subclass 500)',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=90',
      processingTime: '4-6 weeks',
      universities: '150+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'The Australian Student Visa (Subclass 500) enables you to study full-time in a registered course at an Australian educational institution. Experience world-class education in a vibrant, multicultural environment.',
      requirements: [
        'Valid passport',
        'Confirmation of Enrolment (CoE)',
        'Genuine Temporary Entrant (GTE) statement',
        'English language proficiency (IELTS/PTE/TOEFL)',
        'Financial capacity evidence (AUD $24,505/year + tuition + travel)',
        'Overseas Student Health Cover (OSHC)',
        'Academic documents',
        'Health examination',
        'Character requirements',
        'Biometrics'
      ],
      benefits: [
        'Temporary Graduate Visa (485) after studies - 2-4 years',
        'Work up to 48 hours per fortnight during semester',
        'Unlimited work hours during breaks',
        'Bring family members',
        'Access to world-class facilities',
        'Pathway to permanent residence'
      ],
      whatsIncluded: [
        'Course and institution selection',
        'CoE processing assistance',
        'GTE statement preparation',
        'Financial document guidance',
        'OSHC arrangement',
        'Visa application lodgment',
        'Health check coordination',
        'Biometric appointment',
        'Visa grant notification',
        'Pre-departure briefing'
      ],
      popularUniversities: [
        'University of Melbourne',
        'ANU',
        'University of Sydney',
        'UNSW',
        'University of Queensland',
        'Monash University'
      ]
    },
    {
      id: 5,
      country: 'Germany',
      price: '$1,800',
      type: 'Student Visa',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=90',
      processingTime: '6-12 weeks',
      universities: '100+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'Study in Germany with low tuition fees and high-quality education. German Student Visa offers access to world-renowned engineering and research programs.',
      requirements: [
        'Valid passport',
        'University admission letter or conditional acceptance',
        'Blocked account (€11,208 per year)',
        'Health insurance',
        'Academic transcripts',
        'Language proficiency (German or English depending on program)',
        'Motivation letter',
        'CV',
        'Proof of accommodation'
      ],
      benefits: [
        'Low or no tuition fees at public universities',
        '18-month post-study work visa',
        'Work 120 full days or 240 half days per year',
        'Blue Card eligibility after graduation',
        'Access to Schengen area',
        'High quality of life'
      ],
      whatsIncluded: [
        'University application support',
        'Blocked account setup',
        'Admission assistance',
        'Visa application preparation',
        'Document translation support',
        'Appointment scheduling',
        'Interview preparation',
        'Accommodation search help',
        'Integration program info'
      ],
      popularUniversities: [
        'Technical University of Munich',
        'LMU Munich',
        'Heidelberg University',
        'Humboldt University',
        'RWTH Aachen',
        'Free University of Berlin'
      ]
    },
    {
      id: 6,
      country: 'France',
      price: '$2,000',
      type: 'Student Visa',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=90',
      processingTime: '3-4 weeks',
      universities: '80+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'Study in France and experience rich culture, history, and academic excellence. French Student Visa provides access to prestigious institutions and affordable education.',
      requirements: [
        'Valid passport',
        'Campus France registration',
        'University acceptance letter',
        'Proof of financial resources (€615/month)',
        'Accommodation proof',
        'Health insurance',
        'French language proficiency (or English for English-taught programs)',
        'Academic records',
        'Passport photos'
      ],
      benefits: [
        'Affordable tuition fees',
        'Post-study work permit',
        'Work up to 964 hours per year',
        'Quality education and research',
        'Rich cultural experience',
        'Access to EU opportunities'
      ],
      whatsIncluded: [
        'Campus France process guidance',
        'University applications',
        'Document preparation',
        'Visa appointment booking',
        'Interview coaching',
        'Accommodation assistance',
        'Cultural orientation',
        'Arrival support info'
      ],
      popularUniversities: [
        'Sorbonne University',
        'École Polytechnique',
        'Sciences Po',
        'HEC Paris',
        'ENS Paris',
        'Université PSL'
      ]
    },
    {
      id: 7,
      country: 'Ireland',
      price: '$2,500',
      type: 'Student Visa',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=90',
      processingTime: '8 weeks',
      universities: '50+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'Ireland offers high-quality education with strong industry connections, especially in tech and pharmaceutical sectors.',
      requirements: [
        'Valid passport',
        'Letter of acceptance from recognized institution',
        'Proof of fees payment',
        'Evidence of €10,000 available funds',
        'Private medical insurance',
        'English language proficiency',
        'Academic transcripts',
        'Explanation of any study gaps'
      ],
      benefits: [
        '2-year post-study work visa (Level 9 & 10)',
        '1-year post-study work visa (Level 8)',
        'Work 20 hours/week during term',
        'Full-time work during holidays',
        'Access to thriving tech industry',
        'EU opportunities'
      ],
      whatsIncluded: [
        'Institution selection',
        'Application assistance',
        'Financial planning guidance',
        'Insurance arrangement',
        'Visa application support',
        'IRP registration info',
        'Job search guidance',
        'Networking opportunities'
      ],
      popularUniversities: [
        'Trinity College Dublin',
        'University College Dublin',
        'NUI Galway',
        'University College Cork',
        'Dublin City University'
      ]
    },
    {
      id: 8,
      country: 'Netherlands',
      price: '$2,200',
      type: 'Student Visa (MVV)',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=90',
      processingTime: '4-6 weeks',
      universities: '60+ Partner Universities',
      duration: 'Duration of Studies',
      description: 'Study in the Netherlands with innovative teaching methods and internationally-oriented programs, mostly taught in English.',
      requirements: [
        'Valid passport',
        'Admission letter from Dutch institution',
        'Proof of sufficient funds (€11,000-€13,000/year)',
        'Health insurance',
        'Certificate of good conduct',
        'TB test (if applicable)',
        'Academic certificates',
        'English proficiency'
      ],
      benefits: [
        '1-year orientation visa after graduation',
        'Work 16 hours/week during studies',
        'Full-time work in summer',
        'Highly ranked universities',
        'English-taught programs',
        'Bike-friendly lifestyle'
      ],
      whatsIncluded: [
        'University application help',
        'MVV/residence permit application',
        'Financial proof assistance',
        'Nuffic certificate support',
        'Visa interview prep',
        'Housing guidance',
        'BSN registration info',
        'Cultural integration tips'
      ],
      popularUniversities: [
        'University of Amsterdam',
        'Delft University of Technology',
        'Utrecht University',
        'Leiden University',
        'Erasmus University Rotterdam'
      ]
    }
  ];

  const packageData = allPackages.find(pkg => pkg.id === packageId);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Package not found</p>
      </div>
    );
  }

  const handleApplyNow = () => {
    const isLoggedIn = false; // TODO: Replace with real auth check
    
    if (!isLoggedIn) {
      localStorage.setItem('intendedPackage', packageId.toString());
      router.push('/login');
    } else {
      router.push(`/apply/${packageId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchQuery="" setSearchQuery={() => {}} />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={packageData.image}
          alt={packageData.country}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto">
          <div className="mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{packageData.country}</h1>
            <p className="text-white/90 text-xl">{packageData.type}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Student Visa</h2>
              <p className="text-gray-600 leading-relaxed">{packageData.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visa Requirements</h2>
              <ul className="space-y-3">
                {packageData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {packageData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#07b3f2] mt-1 flex-shrink-0">★</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services Include</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {packageData.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#07b3f2] mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Universities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Partner Universities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {packageData.popularUniversities.map((uni, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-[#07b3f2]">🎓</span>
                    <span className="text-gray-700 text-sm font-medium">{uni}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
              <div className="space-y-4">
                {/* Price */}
                <div>
                  <p className="text-sm text-gray-500">Service Fee Starting From</p>
                  <p className="text-4xl font-bold text-[#07b3f2]">{packageData.price}</p>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Partner Universities</span>
                    <span className="text-sm font-semibold text-gray-800">{packageData.universities}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Visa Duration</span>
                    <span className="text-sm font-semibold text-gray-800">{packageData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Processing Time</span>
                    <span className="text-sm font-semibold text-gray-800">{packageData.processingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Success Rate</span>
                    <span className="text-sm font-semibold text-green-600">98%</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button 
                  onClick={handleApplyNow}
                  className="w-full bg-[#07b3f2] text-white py-3 rounded-lg font-medium hover:bg-[#0891c7] transition-all mt-6"
                >
                  Apply Now
                </button>

                {/* Contact */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 text-center">
                    Need help? <span className="text-[#07b3f2] font-medium cursor-pointer">Contact us</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetailsPage;