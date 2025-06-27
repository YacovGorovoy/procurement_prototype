// Badge component for status indicators
import React from 'react';

/**
 * Badge for status indicators
 * @param {string} text - Badge text
 * @param {string} color - Tailwind color classes
 * @param {string} className - Additional classes
 */
export default function Badge({ text, color = 'bg-blue-100 text-blue-800', className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color} ${className}`}>
      {text}
    </span>
  );
} 