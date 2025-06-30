// Mock data for the procurement prototype

export const SUPPLIERS = [
  { value: 'microsoft', label: 'Microsoft Corporation' },
  { value: 'adobe', label: 'Adobe Inc.' },
  { value: 'zoom', label: 'Zoom Video Communications' },
  { value: 'slack', label: 'Slack Technologies' },
  { value: 'atlassian', label: 'Atlassian Corporation' },
  { value: 'salesforce', label: 'Salesforce Inc.' },
  { value: 'amazon', label: 'Amazon Web Services' },
  { value: 'google', label: 'Google Cloud Platform' },
  { value: 'starbucks', label: 'Starbucks Coffee Company' },
  { value: 'staples', label: 'Staples Inc.' },
  { value: 'dell', label: 'Dell Technologies' },
  { value: 'hp', label: 'HP Inc.' },
  { value: 'apple', label: 'Apple Inc.' },
  { value: 'cisco', label: 'Cisco Systems' },
  { value: 'oracle', label: 'Oracle Corporation' }
];

export const PURCHASE_TYPES = [
  { value: 'software', label: 'Software Licenses' },
  { value: 'services', label: 'Professional Services' },
  { value: 'hardware', label: 'Hardware & Equipment' },
  { value: 'office', label: 'Office Supplies' },
  { value: 'marketing', label: 'Marketing & Advertising' },
  { value: 'travel', label: 'Travel & Accommodation' },
  { value: 'training', label: 'Training & Development' },
  { value: 'consulting', label: 'Consulting Services' },
  { value: 'maintenance', label: 'Maintenance & Support' },
  { value: 'other', label: 'Other' }
];

export const SUBSIDIARIES = [
  { value: 'us_main', label: 'US Main Company' },
  { value: 'us_west', label: 'US West Coast Branch' },
  { value: 'us_east', label: 'US East Coast Branch' },
  { value: 'uk_london', label: 'UK London Office' },
  { value: 'de_berlin', label: 'Germany Berlin Office' },
  { value: 'fr_paris', label: 'France Paris Office' },
  { value: 'ca_toronto', label: 'Canada Toronto Office' },
  { value: 'au_sydney', label: 'Australia Sydney Office' }
];

export const CURRENCIES = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
  { value: 'AUD', label: 'AUD - Australian Dollar' }
];

// AI Sample Responses for different types of requests
export const AI_SAMPLE_RESPONSES = {
  'software licenses': {
    title: 'Zoom Premium Licenses for Sales Team',
    supplier: 'zoom',
    purchaseType: 'software',
    subsidiary: 'us_main',
    lineItems: [
      {
        currency: 'USD',
        amount: '14.99',
        quantity: '25',
        desc: 'Zoom Pro licenses for sales team members'
      }
    ],
    description: 'Need premium Zoom licenses for the sales team to conduct customer meetings with extended duration and recording capabilities.'
  },
  'office supplies': {
    title: 'Office Supplies for New Office',
    supplier: 'staples',
    purchaseType: 'office',
    subsidiary: 'us_west',
    lineItems: [
      {
        currency: 'USD',
        amount: '150.00',
        quantity: '1',
        desc: 'Office furniture set for new employee'
      },
      {
        currency: 'USD',
        amount: '25.00',
        quantity: '10',
        desc: 'Desk organizers and storage solutions'
      }
    ],
    description: 'Setting up a new office space and need basic office supplies and furniture for the new team members.'
  },
  'professional services': {
    title: 'Marketing Agency Services',
    supplier: 'new_vendor',
    purchaseType: 'services',
    subsidiary: 'us_main',
    lineItems: [
      {
        currency: 'USD',
        amount: '5000.00',
        quantity: '1',
        desc: 'Brand redesign and marketing materials'
      }
    ],
    description: 'Hiring a new marketing agency to redesign our brand identity and create new marketing materials for the upcoming product launch.'
  },
  'hardware equipment': {
    title: 'Development Team Laptops',
    supplier: 'dell',
    purchaseType: 'hardware',
    subsidiary: 'us_main',
    lineItems: [
      {
        currency: 'USD',
        amount: '1200.00',
        quantity: '8',
        desc: 'Dell XPS 15 laptops for development team'
      }
    ],
    description: 'Need new high-performance laptops for the development team to handle resource-intensive development work.'
  }
};

// Function to generate AI response based on user input
export const generateAIResponse = (userInput) => {
  const input = userInput.toLowerCase();
  
  // Simple keyword matching for demo purposes
  if (input.includes('zoom') || input.includes('video') || input.includes('meeting')) {
    return AI_SAMPLE_RESPONSES['software licenses'];
  } else if (input.includes('office') || input.includes('supplies') || input.includes('furniture')) {
    return AI_SAMPLE_RESPONSES['office supplies'];
  } else if (input.includes('marketing') || input.includes('agency') || input.includes('brand')) {
    return AI_SAMPLE_RESPONSES['professional services'];
  } else if (input.includes('laptop') || input.includes('computer') || input.includes('hardware')) {
    return AI_SAMPLE_RESPONSES['hardware equipment'];
  } else {
    // Default response
    return AI_SAMPLE_RESPONSES['software licenses'];
  }
};

// Sample submitted requests for the home page
export const SAMPLE_REQUESTS = [
  {
    id: 'req_001',
    company: 'Microsoft Corporation',
    desc: 'Office 365 licenses for new hires',
    date: 'Jun 24, 2025',
    requester: 'Sarah Johnson',
    amount: 'USD 1,200.00',
    status: 'PENDING_APPROVAL',
    statusColor: 'yellow'
  },
  {
    id: 'req_002',
    company: 'Staples Inc.',
    desc: 'Office supplies for Q3',
    date: 'Jun 23, 2025',
    requester: 'Mike Chen',
    amount: 'USD 450.00',
    status: 'PENDING_APPROVAL',
    statusColor: 'yellow'
  },
  {
    id: 'req_003',
    company: 'Adobe Inc.',
    desc: 'Creative Suite licenses',
    date: 'Jun 22, 2025',
    requester: 'Lisa Rodriguez',
    amount: 'USD 2,800.00',
    status: 'PENDING_APPROVAL',
    statusColor: 'yellow'
  }
];

// Storage functions (re-exported from storage.js)
export const saveDraft = (draft) => {
  try {
    const drafts = getDrafts();
    const existingIndex = drafts.findIndex(d => d.id === draft.id);
    
    if (existingIndex >= 0) {
      drafts[existingIndex] = { ...draft, updatedAt: new Date().toISOString() };
    } else {
      drafts.push({ ...draft, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    
    localStorage.setItem('procurement_drafts', JSON.stringify(drafts));
    return true;
  } catch (error) {
    console.error('Error saving draft:', error);
    return false;
  }
};

export const getDrafts = () => {
  try {
    const drafts = localStorage.getItem('procurement_drafts');
    return drafts ? JSON.parse(drafts) : [];
  } catch (error) {
    console.error('Error getting drafts:', error);
    return [];
  }
};

export const getDraft = (id) => {
  const drafts = getDrafts();
  return drafts.find(d => d.id === id);
};

export const saveCurrentDraft = (draft) => {
  try {
    localStorage.setItem('procurement_current_draft', JSON.stringify(draft));
    return true;
  } catch (error) {
    console.error('Error saving current draft:', error);
    return false;
  }
};

export const clearCurrentDraft = () => {
  try {
    localStorage.removeItem('procurement_current_draft');
    return true;
  } catch (error) {
    console.error('Error clearing current draft:', error);
    return false;
  }
};

export const generateDraftId = () => {
  return `draft_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}; 