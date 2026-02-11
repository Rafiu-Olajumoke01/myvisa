import React from 'react';
import Link from 'next/link';

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="logo text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#07b3f2] to-[#0891c7] bg-clip-text text-transparent ml-8">
        <Link href="/">MyVisa</Link>
      </div>

      {/* Search Input */}
      <div className="relative w-64 md:w-96 mr-8">
        <input
          type="text"
          placeholder="Search your preferred country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07b3f2]/20 focus:border-[#07b3f2] focus:bg-white transition-all duration-200"
        />
      </div>
    </nav>
  );
}

export default Navbar;