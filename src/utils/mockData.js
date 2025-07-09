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

// Sample request records for the home page that match the UI screenshots
export const SAMPLE_HOME_REQUESTS = [
  // To Submit (Draft) requests
  {
    id: 'req_001',
    type: 'request',
    vendor: 'Demo',
    title: 'Demo',
    amount: 'USD 0.00',
    date: 'Jul 09, 2025',
    requester: 'Luca.M',
    status: 'Draft',
    statusLabel: 'OPEN',
    badge: 'New vendor',
    badgeColor: 'green',
    isNewVendor: true,
    createdAt: '2025-07-09T10:00:00.000Z',
    updatedAt: '2025-07-09T10:00:00.000Z'
  },
  {
    id: 'req_002',
    type: 'request',
    vendor: 'Beer Bazaar Ltd.',
    title: 'tst',
    amount: 'USD 100.00',
    date: 'Jul 01, 2025',
    requester: 'Luca.M',
    status: 'Draft',
    statusLabel: 'OPEN',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-07-01T10:00:00.000Z',
    updatedAt: '2025-07-01T10:00:00.000Z'
  },
  {
    id: 'req_003',
    type: 'request',
    vendor: 'Beer Bazaar Ltd.',
    title: '$ of budget',
    amount: 'USD 150.00',
    date: 'Jun 24, 2025',
    requester: 'Luca.M',
    status: 'Draft',
    statusLabel: 'OPEN',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-06-24T10:00:00.000Z',
    updatedAt: '2025-06-24T10:00:00.000Z'
  },
  
  // To Approve (Pending approval) requests
  {
    id: 'req_004',
    type: 'request',
    vendor: 'Beer Bazaar Ltd.',
    title: 'budget again and again',
    amount: 'USD 1,000.00',
    date: 'Jul 01, 2025',
    requester: 'Jacob.C',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-07-01T09:00:00.000Z',
    updatedAt: '2025-07-01T09:00:00.000Z'
  },
  {
    id: 'req_005',
    type: 'request',
    vendor: 'Beer Bazaar Ltd.',
    title: 'budgeting our life out',
    amount: 'USD 5,011.00',
    date: 'Jul 01, 2025',
    requester: 'Jacob.C',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-07-01T08:00:00.000Z',
    updatedAt: '2025-07-01T08:00:00.000Z'
  },
  
  // Additional "All my items" requests
  {
    id: 'req_006',
    type: 'request',
    vendor: 'Slackk',
    title: 'Test',
    amount: 'USD 100.00',
    date: 'Jul 02, 2025',
    requester: 'Luca.M',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: 'Pending approval',
    badgeColor: 'blue',
    isNewVendor: false,
    createdAt: '2025-07-02T10:00:00.000Z',
    updatedAt: '2025-07-02T10:00:00.000Z'
  },
  {
    id: 'req_007',
    type: 'request',
    vendor: 'Sweet Tooth Ltd',
    title: 'Pastries for pride month',
    amount: 'USD 150.00',
    date: 'Jun 26, 2025',
    requester: 'Luca.M',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: 'Pending approval',
    badgeColor: 'blue',
    isNewVendor: false,
    createdAt: '2025-06-26T10:00:00.000Z',
    updatedAt: '2025-06-26T10:00:00.000Z'
  },
  {
    id: 'req_008',
    type: 'request',
    vendor: 'Customize the field',
    title: 'Test',
    amount: 'USD 112.00',
    date: 'Jul 08, 2025',
    requester: 'Luca.M',
    status: 'Completed',
    statusLabel: 'COMPLETED',
    badge: 'Completed',
    badgeColor: 'green',
    isNewVendor: false,
    createdAt: '2025-07-08T10:00:00.000Z',
    updatedAt: '2025-07-08T10:00:00.000Z'
  },
  
  // Additional requests to reach proper counts
  {
    id: 'req_009',
    type: 'request',
    vendor: 'Tech Solutions Inc',
    title: 'Software licenses',
    amount: 'USD 2,500.00',
    date: 'Jul 03, 2025',
    requester: 'Mike.D',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-07-03T10:00:00.000Z',
    updatedAt: '2025-07-03T10:00:00.000Z'
  },
  {
    id: 'req_010',
    type: 'request',
    vendor: 'Office Supplies Corp',
    title: 'Monthly office supplies',
    amount: 'USD 750.00',
    date: 'Jun 28, 2025',
    requester: 'Sarah.J',
    status: 'Pending approval',
    statusLabel: 'APPROVE',
    badge: null,
    badgeColor: null,
    isNewVendor: false,
    createdAt: '2025-06-28T10:00:00.000Z',
    updatedAt: '2025-06-28T10:00:00.000Z'
  }
];

// Generate additional draft requests to reach count of 21
const generateAdditionalDrafts = () => {
  const additionalDrafts = [];
  const vendors = ['Microsoft Corp', 'Adobe Inc', 'Zoom Technologies', 'Salesforce Inc', 'AWS Services', 'Google Cloud', 'Oracle Corp', 'IBM Solutions', 'Cisco Systems', 'Apple Inc', 'Dell Technologies'];
  const titles = ['Software renewal', 'License upgrade', 'Service contract', 'Hardware purchase', 'Training materials', 'Consulting services', 'Cloud storage', 'Development tools', 'Security software', 'Maintenance contract'];
  
  for (let i = 11; i <= 21; i++) {
    const vendor = vendors[Math.floor(Math.random() * vendors.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const amount = Math.floor(Math.random() * 3000) + 200;
    const dayOffset = Math.floor(Math.random() * 30) + 1;
    const date = new Date(Date.now() - dayOffset * 24 * 60 * 60 * 1000);
    
    additionalDrafts.push({
      id: `req_${i.toString().padStart(3, '0')}`,
      type: 'request',
      vendor,
      title,
      amount: `USD ${amount.toLocaleString()}.00`,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      requester: 'Luca.M',
      status: 'Draft',
      statusLabel: 'OPEN',
      badge: null,
      badgeColor: null,
      isNewVendor: false,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString()
    });
  }
  
  return additionalDrafts;
};

// Generate additional pending approval requests to reach count of 26
const generateAdditionalPendingApproval = () => {
  const additionalPending = [];
  const vendors = ['Marketing Solutions', 'HR Services Ltd', 'Facilities Management', 'Legal Services Inc', 'Accounting Corp', 'IT Support Group', 'Security Solutions', 'Training Academy', 'Catering Services', 'Cleaning Company', 'Transport Services', 'Insurance Group', 'Banking Services', 'Telecommunications', 'Energy Provider', 'Consulting Firm'];
  const titles = ['Monthly service', 'Annual contract', 'Project delivery', 'Support package', 'Maintenance agreement', 'Professional services', 'Equipment rental', 'Training program', 'Consulting project', 'Service upgrade'];
  const requesters = ['Jacob.C', 'Mike.D', 'Sarah.J', 'Lisa.R', 'Tom.W', 'Emma.K', 'David.P', 'Anna.S'];
  
  for (let i = 11; i <= 26; i++) {
    const vendor = vendors[Math.floor(Math.random() * vendors.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const requester = requesters[Math.floor(Math.random() * requesters.length)];
    const amount = Math.floor(Math.random() * 8000) + 500;
    const dayOffset = Math.floor(Math.random() * 20) + 1;
    const date = new Date(Date.now() - dayOffset * 24 * 60 * 60 * 1000);
    
    additionalPending.push({
      id: `req_${(i + 100).toString().padStart(3, '0')}`,
      type: 'request',
      vendor,
      title,
      amount: `USD ${amount.toLocaleString()}.00`,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      requester,
      status: 'Pending approval',
      statusLabel: 'APPROVE',
      badge: null,
      badgeColor: null,
      isNewVendor: false,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString()
    });
  }
  
  return additionalPending;
};

// Combined sample requests with proper counts
export const ALL_SAMPLE_REQUESTS = [
  ...SAMPLE_HOME_REQUESTS,
  ...generateAdditionalDrafts(),
  ...generateAdditionalPendingApproval()
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