import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Button from '../components/Button';
import BackLink from '../components/BackLink';
import AILoadingSpinner from '../components/AILoadingSpinner';
import { generateAIResponse } from '../utils/mockData';

export default function AIPromptScreen({ onNavigate }) {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const response = generateAIResponse(prompt);
      setAiResponse(response);
      setIsProcessing(false);
    }, 3000);
  };

  const handleContinue = () => {
    if (aiResponse) {
      // Navigate to form with AI response data
      onNavigate('request-form', { aiData: aiResponse });
    }
  };

  const handleManualEntry = () => {
    onNavigate('request-form');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="home" onNavClick={key => console.log('Nav:', key)} />
      <div className="flex-1 flex flex-col">
        <Header userName="YacovProcPayer" />
        
        <div className="p-8 max-w-4xl mx-auto w-full">
          <BackLink onClick={() => onNavigate('new-request-options')}>Back to options</BackLink>
          
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tell us what you need</h1>
            <p className="text-gray-600 mb-8">
              Describe your purchase request in natural language. Our AI will help populate the form for you.
            </p>
            
            {!isProcessing && !aiResponse && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your request
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., I need 25 Zoom Pro licenses for our sales team to conduct customer meetings with extended duration and recording capabilities."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="primary" 
                    onClick={handleSubmit}
                    disabled={!prompt.trim()}
                  >
                    Process with AI
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={handleManualEntry}
                  >
                    Skip to Manual Entry
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Examples:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• "I need 25 Zoom Pro licenses for our sales team"</li>
                    <li>• "Office supplies for new office setup including furniture and desk organizers"</li>
                    <li>• "Marketing agency services for brand redesign and new materials"</li>
                    <li>• "8 high-performance laptops for the development team"</li>
                  </ul>
                </div>
              </div>
            )}
            
            {isProcessing && (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <AILoadingSpinner message="AI is analyzing your request and populating the form..." />
              </div>
            )}
            
            {aiResponse && !isProcessing && (
              <div className="bg-white rounded-lg border border-gray-200 p-8 fade-in">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">AI Analysis Complete</h2>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Here's what I found:</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Title:</span> {aiResponse.title}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Supplier:</span> {aiResponse.supplier}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Type:</span> {aiResponse.purchaseType}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Description:</span> {aiResponse.description}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Items:</span> {aiResponse.lineItems.length} line item(s)
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="primary" onClick={handleContinue}>
                    Continue with AI Data
                  </Button>
                  <Button variant="secondary" onClick={() => setAiResponse(null)}>
                    Try Again
                  </Button>
                  <Button variant="secondary" onClick={handleManualEntry}>
                    Start Manual Entry
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 