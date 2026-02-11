'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './../components/Navbar/Navbar';

// ─── Bottom Nav Icons ──────────────────────────────────────────────────────────
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
      fill={active ? '#07b3f2' : 'none'}
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const MyVisaIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 17V7L8.5 14L12 8.5L15.5 14L20 7V17"
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 17C4 17 7 19.5 12 19.5C17 19.5 20 17 20 17"
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SavedIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 3H19C19.5523 3 20 3.44772 20 4V21L12 17L4 21V4C4 3.44772 4.44772 3 5 3Z"
      fill={active ? '#07b3f2' : 'none'}
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4"
      fill={active ? '#07b3f2' : 'none'}
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
    />
    <path
      d="M4 20C4 17 7.58172 14 12 14C16.4183 14 20 17 20 20"
      stroke={active ? '#07b3f2' : '#9ca3af'}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

function PackagesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);

  // ─── AUTH CHECK ─────────────────────────────────────────────────────────────
  // 🔴 Hardcoded false — blocks everyone until Django backend is ready.
  // ✅ When Django is done, replace with your real session/cookie check.
  const isLoggedIn = false;
  // ────────────────────────────────────────────────────────────────────────────

  const packages = [
    {
      id: 1,
      country: 'United States',
      price: '$3,500',
      type: 'Student Visa (F-1)',
      universities: '500+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=90',
    },
    {
      id: 2,
      country: 'United Kingdom',
      price: '$2,800',
      type: 'Student Visa (Tier 4)',
      universities: '300+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=90',
    },
    {
      id: 3,
      country: 'Canada',
      price: '$3,200',
      type: 'Study Permit',
      universities: '200+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=90',
    },
    {
      id: 4,
      country: 'Australia',
      price: '$3,800',
      type: 'Student Visa (500)',
      universities: '150+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=90',
    },
    {
      id: 5,
      country: 'Germany',
      price: '$1,800',
      type: 'Student Visa',
      universities: '100+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=90',
    },
    {
      id: 6,
      country: 'France',
      price: '$2,000',
      type: 'Student Visa',
      universities: '80+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=90',
    },
    {
      id: 7,
      country: 'Ireland',
      price: '$2,500',
      type: 'Student Visa',
      universities: '50+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=90',
    },
    {
      id: 8,
      country: 'Netherlands',
      price: '$2,200',
      type: 'Student Visa (MVV)',
      universities: '60+ Universities',
      duration: 'Duration of Studies',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=90',
    },
  ];

  const filteredPackages = packages.filter((pkg) =>
    searchQuery === '' ? true : pkg.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ─── Auth gate ─────────────────────────────────────────────────────────────
  const requireAuth = (destination) => {
    if (isLoggedIn) {
      router.push(destination);
    } else {
      setPendingRoute(destination);
      setShowAuthModal(true);
    }
  };

  const handlePackageClick = (pkgId) => {
    requireAuth(`/package/${pkgId}`);
  };

  // ✅ Passes the destination inside the login URL as ?redirect=
  // Login page reads searchParams.get('redirect') and pushes there after auth
  const handleGoToLogin = () => {
    setShowAuthModal(false);
    const redirectParam = pendingRoute
      ? `?redirect=${encodeURIComponent(pendingRoute)}`
      : '';
    router.push(`/login${redirectParam}`);
    // e.g. user clicked package 3 → goes to: /login?redirect=%2Fpackage%2F3
    // after login → router.push('/package/3')  ✅
  };

  const handleDismissModal = () => {
    setShowAuthModal(false);
    setPendingRoute(null);
  };

  const navItems = [
    { key: 'home',    label: 'Home',    icon: HomeIcon,    route: '/',        gated: false },
    { key: 'myvisa',  label: 'My Visa', icon: MyVisaIcon,  route: '/my-visa', gated: true  },
    { key: 'saved',   label: 'Saved',   icon: SavedIcon,   route: '/saved',   gated: true  },
    { key: 'profile', label: 'Profile', icon: ProfileIcon, route: '/profile', gated: true  },
  ];

  const handleNavClick = (item) => {
    if (item.gated) {
      requireAuth(item.route);
    } else {
      setActiveTab(item.key);
      router.push(item.route);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="px-6 py-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No countries found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handlePackageClick(pkg.id)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-semibold mb-1">{pkg.country}</h3>
                    <p className="text-white/90 text-sm">{pkg.type}</p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Partner Universities</p>
                      <p className="text-sm font-semibold text-gray-800">{pkg.universities}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-800">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <p className="text-2xl font-bold text-[#07b3f2]">{pkg.price}</p>
                    <span className="text-sm text-gray-500">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Mobile Bottom Nav ──────────────────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg md:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item)}
                className="flex flex-col items-center justify-center gap-1 px-4 py-1 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Icon active={isActive} />
                <span className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-[#07b3f2]' : 'text-gray-400'}`}>
                  {item.label}
                </span>
                {isActive && <span className="w-1 h-1 rounded-full bg-[#07b3f2]" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Auth Gate Modal ────────────────────────────────────────────────── */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          onClick={handleDismissModal}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <div
            className="relative w-full md:max-w-sm bg-white rounded-t-3xl md:rounded-2xl px-6 pt-5 pb-10 md:pb-6 shadow-2xl"
            style={{ animation: 'slideUp 0.3s cubic-bezier(0.32,0.72,0,1) forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-5 md:hidden" />

            <div className="w-16 h-16 rounded-2xl bg-[#07b3f2]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="3" width="16" height="18" rx="2" stroke="#07b3f2" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="3" stroke="#07b3f2" strokeWidth="1.8" />
                <path d="M7 17c0-2.21 2.239-4 5-4s5 1.79 5 4" stroke="#07b3f2" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
              Sign in to continue
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6 leading-relaxed">
              Create a free account or log in to view package details and start your visa journey.
            </p>

            <button
              onClick={handleGoToLogin}
              className="w-full bg-[#07b3f2] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#0891c7] transition-colors mb-3"
            >
              Log in / Sign up
            </button>
            <button
              onClick={handleDismissModal}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default PackagesPage;