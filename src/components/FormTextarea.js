// FormTextarea for multi-line input
import React from 'react';

/**
 * FormTextarea for multi-line input
 * @param {string} label - Label text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Required field
 * @param {string} className - Additional classes
 */
export default function FormTextarea({ label, value, onChange, placeholder, required, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label className="block mb-1 font-medium text-gray-600">{label}{required && ' *'}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-textarea w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-200"
        rows={3}
        {...props}
      />
    </div>
  );
} 