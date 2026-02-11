'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/usedTheme.jpg',
      title: 'Luxury',
      titleAccent: 'Affordable',
      tagline: 'Discover breathtaking destinations'
    },
    {
      image: '/thirdImage.jpg',
      title: 'Adventure',
      titleAccent: 'Awaits',
      tagline: 'Embark on unforgettable journeys'
    },
    {
      image: '/lastImage.jpg',
      title: 'Dream',
      titleAccent: 'Destinations',
      tagline: 'Experience paradise like never before'
    }
  ];

  // Featured packages to show on slider
  const featuredPackages = [
    {
      id: 1,
      name: 'Paris',
      price: '$1,299',
      duration: '5D/4N',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80'
    },
    {
      id: 2,
      name: 'Bali',
      price: '$899',
      duration: '7D/6N',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80'
    },
    {
      id: 3,
      name: 'Dubai',
      price: '$1,599',
      duration: '4D/3N',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80'
    },
    {
      id: 4,
      name: 'Maldives',
      price: '$2,199',
      duration: '6D/5N',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80'
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePackageClick = (packageId) => {
    // Redirect to signup page with package info
    router.push(`/signup?package=${packageId}`);
  };

  return (
    <>
      {/* Slider Section - 70vh */}
      <section className="relative h-[70vh] w-full overflow-visible">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        ))}

        {/* Hero Text - Reduced */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl pt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              {slides[currentSlide].title}{' '}
              <span className="text-[#FF7F50]">{slides[currentSlide].titleAccent}</span>
            </h1>
            <p className="text-base md:text-xl font-light">
              {slides[currentSlide].tagline}
            </p>
          </div>
        </div>

        {/* Package Cards - Starting from 50vh, extending down */}
        <div className="absolute top-[50vh] left-0 right-0 z-20 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6 text-center">
                Featured Destinations
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featuredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => handlePackageClick(pkg.id)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      {/* Package Image */}
                      <div className="relative h-28 md:h-32 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 text-white">
                          <h4 className="font-bold text-base md:text-lg">{pkg.name}</h4>
                        </div>
                      </div>
                      
                      {/* Package Info */}
                      <div className="p-3 bg-white">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs md:text-sm text-gray-600">{pkg.duration}</span>
                          <span className="font-bold text-sm md:text-base text-[#FF7F50]">{pkg.price}</span>
                        </div>
                        <button className="w-full py-2 bg-[#FF7F50] text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-[#ff6a3d] transition-all duration-300">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => router.push('/packages')}
                  className="px-6 py-2 bg-white text-[#FF7F50] font-semibold rounded-full border-2 border-white hover:bg-[#FF7F50] hover:text-white transition-all duration-300"
                >
                  View All Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Background Section Below */}
      <section className="bg-gray-50 pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* You can add more content here */}
        </div>
      </section>
    </>
  );
}

export default Hero;