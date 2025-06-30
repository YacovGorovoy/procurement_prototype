// FormInput for text fields
import React from 'react';

/**
 * FormInput for text fields
 * @param {string} label - Label text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Required field
 * @param {string} className - Additional classes
 */
export default function FormInput({ label, value, onChange, placeholder, required, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label className="block mb-1 font-medium text-gray-600">{label}{required && ' *'}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-200"
        {...props}
      />
    </div>
  );
} 