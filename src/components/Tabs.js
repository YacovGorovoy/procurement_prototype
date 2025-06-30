// Tabs for switching between 'To submit' and 'To approve'
import React from 'react';

/**
 * Tabs for request status
 * @param {string} activeTab - The active tab key
 * @param {object} counts - { toSubmit: number, toApprove: number }
 * @param {function} onTabClick - Callback for tab click
 */
export default function Tabs({ activeTab = 'toSubmit', counts = { toSubmit: 0, toApprove: 0 }, onTabClick }) {
  return (
    <div className="flex border-b mb-4">
      <button
        className={`py-2 px-4 font-semibold border-b-2 ${activeTab === 'toSubmit' ? 'text-gray-800 border-gray-800' : 'text-gray-500 border-transparent'}`}
        onClick={() => onTabClick && onTabClick('toSubmit')}
      >
        To submit <span>{counts.toSubmit}</span>
      </button>
      <button
        className={`py-2 px-4 font-semibold border-b-2 ${activeTab === 'toApprove' ? 'text-gray-800 border-gray-800' : 'text-gray-500 border-transparent'}`}
        onClick={() => onTabClick && onTabClick('toApprove')}
      >
        To approve <span>{counts.toApprove}</span>
      </button>
    </div>
  );
} 