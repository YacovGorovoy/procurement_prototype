// Card for displaying a procurement request
import React, { useState } from 'react';
import Button from './Button';
import CustomCheckbox from './CustomCheckbox';
import Badge from './Badge';

/**
 * RequestCard for displaying a procurement request
 * @param {string} company - Company name
 * @param {string} desc - Description
 * @param {string} date - Date string
 * @param {string} requester - Requester name
 * @param {string} amount - Amount string
 * @param {string} status - Status label (OPEN/APPROVE)
 * @param {string} statusColor - Tailwind color for status
 * @param {function} onStatusClick - Click handler for status button
 * @param {boolean} selected - Whether the card is selected
 * @param {function} onSelect - Handler for selection
 * @param {string} badge - Optional badge text
 * @param {string} className - Additional classes
 */
export default function RequestCard({
  company,
  desc,
  date,
  requester,
  amount,
  status,
  statusColor = 'blue',
  onStatusClick,
  selected = false,
  onSelect,
  badge,
  className = '',
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative p-4 rounded-lg flex items-center justify-between transition-all duration-150 cursor-pointer border ${
        selected
          ? 'bg-white border border-black shadow-md z-10'
          : hovered
          ? 'bg-blue-50 border-gray-200 shadow-sm'
          : 'bg-white border-gray-200'
      } ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center space-x-4 w-1/3 min-w-0">
        <CustomCheckbox checked={selected} onChange={onSelect} />
        <div className="bg-gray-100 p-3 rounded-md flex flex-col items-center min-w-[56px]">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
        </div>
        <div className="min-w-0">
          {badge && <Badge text={badge} className="mb-1" />}
          <p className="font-semibold text-gray-800 truncate">{company}</p>
          <p className="text-sm text-gray-500 truncate">{desc}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between min-w-0">
        <div className="text-sm text-gray-500 ml-4 whitespace-nowrap">
          {status === 'OPEN' ? 'Created' : 'Requested'}: <span className="text-gray-700">{date}</span>
        </div>
        <div className="text-sm text-gray-500 ml-4 whitespace-nowrap">
          Requested by: <span className="text-gray-700">{requester}</span>
        </div>
        <div className="font-bold text-lg ml-4 whitespace-nowrap">{amount}</div>
        <Button
          variant="secondary"
          className="ml-4 px-6 py-2 rounded-lg border border-black text-black"
          onClick={onStatusClick}
        >
          {status}
        </Button>
      </div>
    </div>
  );
} 