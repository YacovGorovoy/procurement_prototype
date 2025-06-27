// Sidebar navigation for the procurement app
import React from 'react';

const navItems = [
  { icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7m6 0v6m0 0l-2 2m2-2l2 2" /></svg>
    ), key: 'home' },
  { icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
    ), key: 'requests' },
];

/**
 * Sidebar navigation with logo and icons
 * @param {string} active - The active nav item key
 * @param {function} onNavClick - Callback for nav item click
 */
export default function Sidebar({ active = 'home', onNavClick }) {
  return (
    <aside className="sidebar w-16 md:w-20 flex flex-col items-center py-4 space-y-6 text-white bg-[#2c3e50] h-screen">
      <div className="text-2xl font-bold">T</div>
      <nav className="flex flex-col items-center space-y-4 flex-grow mt-8">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`p-3 rounded-lg nav-item ${active === item.key ? 'bg-[#34495e]' : ''}`}
            onClick={() => onNavClick && onNavClick(item.key)}
            aria-label={item.key}
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </aside>
  );
} 