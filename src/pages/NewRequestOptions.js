import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Button from '../components/Button';
import BackLink from '../components/BackLink';

export default function NewRequestOptions({ onNavigate }) {
  const handleOptionSelect = (option) => {
    if (option === 'ai') {
      onNavigate('ai-prompt');
    } else if (option === 'manual') {
      onNavigate('request-form');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="home" onNavClick={key => console.log('Nav:', key)} />
      <div className="flex-1 flex flex-col">
        <Header userName="YacovProcPayer" />
        
        <div className="p-8 max-w-4xl mx-auto w-full">
          <BackLink onClick={() => onNavigate('home')}>Back to Home</BackLink>
          
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create a new request</h1>
            <p className="text-gray-600 mb-8">Choose how you'd like to create your purchase request</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Option */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleOptionSelect('ai')}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">AI-Assisted</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Describe what you need in natural language and our AI will help populate the request form for you.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Faster request creation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Automatic field population
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Smart suggestions
                  </li>
                </ul>
                <Button variant="primary" className="w-full">
                  Start with AI
                </Button>
              </div>

              {/* Manual Option */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleOptionSelect('manual')}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">Manual Entry</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Fill out the request form manually with full control over all fields and options.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Complete control
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Step-by-step guidance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    All options available
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Start Manual Entry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 