import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RequestCard from '../components/RequestCard';
import DropdownMenu from '../components/DropdownMenu';
import SearchInput from '../components/SearchInput';
import Tabs from '../components/Tabs';
import { getDrafts, SAMPLE_REQUESTS } from '../utils/mockData';

export default function Home({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('toSubmit');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [drafts, setDrafts] = useState([]);
  const [requests] = useState(SAMPLE_REQUESTS);

  useEffect(() => {
    // Load drafts from storage
    const savedDrafts = getDrafts();
    setDrafts(savedDrafts);
  }, []);

  const handleNewRequest = (type) => {
    if (type === 'purchase') {
      onNavigate('new-request-options');
    } else if (type === 'expense') {
      onNavigate('expense-form');
    }
  };

  const handleRequestClick = (request) => {
    if (request.status === 'PENDING_APPROVAL') {
      // Show read-only view for submitted requests
      onNavigate('request-detail', { requestId: request.id });
    }
  };

  const filteredRequests = requests.filter(req => 
    req.company.toLowerCase().includes(search.toLowerCase()) ||
    req.desc.toLowerCase().includes(search.toLowerCase())
  );

  const filteredDrafts = drafts.filter(draft => 
    draft.title?.toLowerCase().includes(search.toLowerCase()) ||
    draft.description?.toLowerCase().includes(search.toLowerCase())
  );

  const dropdownOptions = [
    {
      label: 'Create a purchase request',
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="5" y="3" width="14" height="18" rx="2" fill="#F7E6D7" />
          <rect x="8" y="7" width="8" height="2" rx="1" fill="#B97A56" />
          <rect x="8" y="11" width="5" height="2" rx="1" fill="#B97A56" />
        </svg>
      ),
      onClick: () => handleNewRequest('purchase')
    },
    {
      label: 'Submit an expense',
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="3" fill="#E6F0F8" />
          <rect x="7" y="9" width="10" height="2" rx="1" fill="#2D6B9F" />
          <rect x="7" y="13" width="6" height="2" rx="1" fill="#2D6B9F" />
        </svg>
      ),
      onClick: () => handleNewRequest('expense')
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="home" onNavClick={key => console.log('Nav:', key)} />
      <div className="flex-1 flex flex-col">
        <Header userName="YacovProcPayer" />
        
        <div className="p-8">
          {/* Header with New button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Home</h1>
            <DropdownMenu
              buttonContent={<span>+ New</span>}
              open={dropdownOpen}
              setOpen={setDropdownOpen}
              options={dropdownOptions}
              maxWidth="max-w-3xl"
            />
          </div>

          {/* Tabs */}
          <Tabs
            activeTab={activeTab}
            counts={{ 
              toSubmit: drafts.length, 
              toApprove: requests.length 
            }}
            onTabClick={setActiveTab}
          />

          {/* Search */}
          <div className="mb-6">
            <SearchInput
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search requests..."
            />
          </div>

          {/* Content based on active tab */}
          {activeTab === 'toSubmit' ? (
            <div className="space-y-4">
              {filteredDrafts.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No drafts found. Create a new request to get started.</p>
                </div>
              ) : (
                filteredDrafts.map(draft => (
                  <div key={draft.id} className="relative">
                    <RequestCard
                      company={draft.title || 'Untitled Request'}
                      desc={draft.description || 'No description'}
                      date={new Date(draft.updatedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                      requester="You"
                      amount={`USD ${draft.lineItems?.reduce((sum, item) => 
                        sum + (parseFloat(item.amount) || 0) * (parseInt(item.quantity) || 1), 0
                      ).toFixed(2) || '0.00'}`}
                      status="DRAFT"
                      onStatusClick={() => onNavigate('request-form', { draftId: draft.id })}
                      badge="Draft"
                      className="cursor-pointer"
                    />
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRequests.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No requests pending approval.</p>
                </div>
              ) : (
                filteredRequests.map(request => (
                  <RequestCard
                    key={request.id}
                    company={request.company}
                    desc={request.desc}
                    date={request.date}
                    requester={request.requester}
                    amount={request.amount}
                    status={request.status}
                    onStatusClick={() => handleRequestClick(request)}
                    className="cursor-pointer"
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 