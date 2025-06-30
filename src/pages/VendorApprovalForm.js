import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Button from '../components/Button';
import BackLink from '../components/BackLink';
import Stepper from '../components/Stepper';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormTextarea from '../components/FormTextarea';

const LEGAL_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];
const SECURITY_LEVELS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export default function VendorApprovalForm({ onNavigate, vendorName: initialVendorName = '' }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    vendorName: initialVendorName,
    contactName: '',
    email: '',
    phone: '',
    address: '',
    taxId: '',
    legalApproved: '',
    legalNotes: '',
    securityLevel: '',
    securityNotes: '',
    alsoPurchase: false,
    updatedAt: new Date().toISOString(),
    status: 'DRAFT',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialVendorName) {
      setFormData(f => ({ ...f, vendorName: initialVendorName }));
    }
  }, [initialVendorName]);

  const steps = [
    { label: 'Vendor details', active: currentStep === 0, completed: currentStep > 0 },
    { label: 'Legal', active: currentStep === 1, completed: currentStep > 1 },
    { label: 'Security', active: currentStep === 2, completed: currentStep > 2 },
    { label: 'Review & Submit', active: currentStep === 3, completed: false },
  ];

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.vendorName.trim()) newErrors.vendorName = 'Vendor Name is required';
      if (!formData.contactName.trim()) newErrors.contactName = 'Contact Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
    }
    if (currentStep === 1) {
      if (!formData.legalApproved) newErrors.legalApproved = 'Legal approval is required';
    }
    if (currentStep === 2) {
      if (!formData.securityLevel) newErrors.securityLevel = 'Security risk level is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigate('home');
    }
  };

  const handleSaveDraft = () => {
    // Save draft and navigate to home like RequestForm
    onNavigate('home');
  };

  if (submitted) {
    if (formData.alsoPurchase) {
      onNavigate('request-form', { supplier: formData.vendorName });
    } else {
      onNavigate('home');
    }
    return null;
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <FormInput 
              label="Vendor Name" 
              value={formData.vendorName} 
              onChange={e => setFormData(f => ({ ...f, vendorName: e.target.value }))} 
              required 
              className={errors.vendorName ? 'border-red-500' : ''} 
            />
            {errors.vendorName && <p className="text-red-500 text-sm">{errors.vendorName}</p>}
            <FormInput 
              label="Contact Name" 
              value={formData.contactName} 
              onChange={e => setFormData(f => ({ ...f, contactName: e.target.value }))} 
              required 
              className={errors.contactName ? 'border-red-500' : ''} 
            />
            {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName}</p>}
            <FormInput 
              label="Email" 
              value={formData.email} 
              onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} 
              required 
              className={errors.email ? 'border-red-500' : ''} 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <FormInput 
              label="Phone" 
              value={formData.phone} 
              onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} 
            />
            <FormInput 
              label="Address" 
              value={formData.address} 
              onChange={e => setFormData(f => ({ ...f, address: e.target.value }))} 
            />
            <FormInput 
              label="Tax ID" 
              value={formData.taxId} 
              onChange={e => setFormData(f => ({ ...f, taxId: e.target.value }))} 
            />
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-6">
            <FormSelect
              label="Legal Approved?"
              value={formData.legalApproved}
              onChange={val => setFormData(f => ({ ...f, legalApproved: val }))}
              options={LEGAL_OPTIONS}
              placeholder="Select approval status"
              required
              className={errors.legalApproved ? 'border-red-500' : ''}
            />
            {errors.legalApproved && <p className="text-red-500 text-sm">{errors.legalApproved}</p>}
            <FormTextarea
              label="Legal Notes"
              value={formData.legalNotes}
              onChange={e => setFormData(f => ({ ...f, legalNotes: e.target.value }))}
              placeholder="Add any legal notes..."
            />
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <FormSelect
              label="Security Risk Level"
              value={formData.securityLevel}
              onChange={val => setFormData(f => ({ ...f, securityLevel: val }))}
              options={SECURITY_LEVELS}
              placeholder="Select risk level"
              required
              className={errors.securityLevel ? 'border-red-500' : ''}
            />
            {errors.securityLevel && <p className="text-red-500 text-sm">{errors.securityLevel}</p>}
            <FormTextarea
              label="Security Notes"
              value={formData.securityNotes}
              onChange={e => setFormData(f => ({ ...f, securityNotes: e.target.value }))}
              placeholder="Add any security notes..."
            />
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-4">Vendor Approval Summary</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-medium">Vendor Name:</span> {formData.vendorName}</div>
                <div><span className="font-medium">Contact:</span> {formData.contactName}</div>
                <div><span className="font-medium">Email:</span> {formData.email}</div>
                <div><span className="font-medium">Phone:</span> {formData.phone}</div>
                <div><span className="font-medium">Address:</span> {formData.address}</div>
                <div><span className="font-medium">Tax ID:</span> {formData.taxId}</div>
                <div><span className="font-medium">Legal Approved:</span> {formData.legalApproved}</div>
                <div><span className="font-medium">Legal Notes:</span> {formData.legalNotes}</div>
                <div><span className="font-medium">Security Level:</span> {formData.securityLevel}</div>
                <div><span className="font-medium">Security Notes:</span> {formData.securityNotes}</div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-medium mb-1">Do you also want to make a purchase from this vendor now?</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" checked={formData.alsoPurchase} onChange={e => setFormData(f => ({ ...f, alsoPurchase: e.target.checked }))} />
                  <span className="ml-2">Yes, start a purchase request</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="home" onNavClick={() => onNavigate('home')} />
      <div className="flex-1 flex">
        <div className="w-64 bg-white border-r border-gray-200 p-6">
          <BackLink onClick={handleBack}>Back</BackLink>
          <Stepper steps={steps} onStepClick={setCurrentStep} />
        </div>
        
        <div className="flex-1 flex flex-col">
          <Header userName="YacovProcPayer" />
          
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {steps[currentStep]?.label}
                </h1>
                <p className="text-gray-600">
                  {currentStep === 0 && 'Enter the basic details of your vendor request'}
                  {currentStep === 1 && 'Provide legal/compliance information for this vendor'}
                  {currentStep === 2 && 'Provide security and risk information for this vendor'}
                  {currentStep === 3 && 'Review all details before submitting your vendor approval request'}
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                {renderStepContent()}
                
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button variant="secondary" onClick={handleSaveDraft}>
                    Save Draft
                  </Button>
                  
                  <div className="flex space-x-4">
                    {currentStep > 0 && (
                      <Button variant="secondary" onClick={handleBack}>
                        Back
                      </Button>
                    )}
                    <Button 
                      variant="primary" 
                      onClick={handleNext}
                    >
                      {currentStep === steps.length - 1 ? 'Submit Request' : 'Next'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 