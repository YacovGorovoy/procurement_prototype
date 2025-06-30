import React, { useState, useRef, useEffect } from 'react';

/**
 * FormSelect: Custom, accessible, searchable dropdown
 * @param {string} label - Label text
 * @param {string} value - Selected value
 * @param {function} onChange - Change handler (value)
 * @param {Array} options - Array of { value, label }
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Required field
 * @param {string} className - Additional classes
 * @param {string} searchPlaceholder - Placeholder for search input
 * @param {function} action - Optional action row: { label, onClick }
 * @param {boolean} disabled - Disabled state
 * @param {string} selectedDisplay - Custom selected value display
 * @param {function} onActionWithSearch - Optional callback for action, receives current search value
 */
export default function FormSelect({
  label,
  value,
  onChange,
  options = [],
  placeholder = '',
  required = false,
  className = '',
  searchPlaceholder = 'Search...',
  action, // { label, onClick }
  disabled = false,
  selectedDisplay, // NEW: custom selected value display
  onActionWithSearch, // NEW: callback for action with search value
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef();
  const listRef = useRef();
  const filtered = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setSearch('');
    setHighlighted(0);
  }, [open]);

  useEffect(() => {
    if (open && listRef.current && filtered.length > 0) {
      const el = listRef.current.children[highlighted];
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [highlighted, open, filtered]);

  const handleSelect = (val) => {
    onChange && onChange(val);
    setOpen(false);
    setSearch('');
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted(h => Math.min(h + 1, filtered.length - 1 + (action ? 1 : 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted(h => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlighted < filtered.length) {
        handleSelect(filtered[highlighted].value);
      } else if (action && highlighted === filtered.length) {
        action.onClick && action.onClick();
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className={className + ' relative'}>
      {label && (
        <label className="block mb-1 font-medium text-gray-600">
          {label}{required && ' *'}
        </label>
      )}
      <button
        type="button"
        className={`w-full text-left border border-gray-300 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-blue-200 flex items-center justify-between ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen(o => !o)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        {...props}
      >
        <span className={selectedOption ? '' : 'text-gray-400'}>
          {selectedDisplay ? selectedDisplay : (selectedOption ? selectedOption.label : placeholder)}
        </span>
        <svg className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg">
          <input
            ref={inputRef}
            type="text"
            className="w-full px-3 py-2 border-b border-gray-100 focus:outline-none"
            placeholder={searchPlaceholder}
            value={search}
            onChange={e => { setSearch(e.target.value); setHighlighted(0); }}
            onKeyDown={handleKeyDown}
            aria-label="Search options"
          />
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            className="max-h-56 overflow-auto"
            aria-activedescendant={highlighted}
          >
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-gray-400 select-none" role="option" aria-disabled="true">
                No results
              </li>
            )}
            {filtered.map((opt, idx) => (
              <li
                key={opt.value}
                id={`option-${idx}`}
                role="option"
                aria-selected={value === opt.value}
                className={`px-3 py-2 cursor-pointer ${highlighted === idx ? 'bg-blue-50' : ''} ${value === opt.value ? 'font-semibold text-blue-700' : ''}`}
                onMouseEnter={() => setHighlighted(idx)}
                onMouseDown={e => { e.preventDefault(); handleSelect(opt.value); }}
              >
                {opt.label}
              </li>
            ))}
            {action && (
              <li
                key="action"
                role="option"
                aria-selected={false}
                className={`px-3 py-2 cursor-pointer border-t border-gray-100 text-blue-700 font-semibold ${highlighted === filtered.length ? 'bg-blue-50' : ''}`}
                onMouseEnter={() => setHighlighted(filtered.length)}
                onMouseDown={e => { e.preventDefault();
                  if (onActionWithSearch) onActionWithSearch(search);
                  action.onClick && action.onClick();
                  setOpen(false);
                }}
              >
                {action.label}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
} 