// Header bar for the procurement app
import React from 'react';

/**
 * Header with search, notification, help, and user info
 * @param {string} userName - The user's name
 * @param {function} onSearch - Callback for search input
 */
export default function Header({ userName = 'User', onSearch }) {
  return (
    <header className="flex justify-end items-center p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <button className="text-gray-500" aria-label="Help">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14v.01M12 10a4 4 0 10-4 4h.01M12 10a4 4 0 014 4h-.01M12 10v4" /></svg>
        </button>
        <button className="text-gray-500" aria-label="Notifications">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12.158v2c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <span className="font-semibold">{userName}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </header>
  );
} 