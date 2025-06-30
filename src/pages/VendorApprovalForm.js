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
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialVendorName) {
      setFormData(f => ({ ...f, vendorName: initialVendorName }));
    }
  }, [initialVendorName]);

  const steps = [
    { label: 'Vendor Details', active: currentStep === 0, completed: currentStep > 0 },
    { label: 'Legal', active: currentStep === 1, completed: currentStep > 1 },
    { label: 'Security', active: currentStep === 2, completed: currentStep > 2 },
    { label: 'Review & Submit', active: currentStep === 3, completed: false },
  ];

  const validateStep = () => {
    if (currentStep === 0 && !formData.vendorName) {
      setError('Vendor Name is required');
      return false;
    }
    setError('');
    return true;
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
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else onNavigate('home');
  };
  const handleSaveDraft = () => {
    // Save to localStorage or backend (mock)
    setError('Draft saved!');
    setTimeout(() => setError(''), 1500);
  };

  if (submitted) {
    // Save as submitted (mock)
    if (formData.alsoPurchase) {
      onNavigate('request-form', { supplier: formData.vendorName });
    } else {
      onNavigate('home');
    }
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="home" onNavClick={() => onNavigate('home')} />
      <div className="flex-1 flex flex-col">
        <Header userName="YacovProcPayer" />
        <div className="p-8 max-w-2xl mx-auto w-full">
          <BackLink onClick={() => onNavigate('home')}>Back to Home</BackLink>
          <Stepper steps={steps} onStepClick={setCurrentStep} />
          <form className="bg-white p-8 rounded shadow max-w-xl w-full mt-8" onSubmit={e => { e.preventDefault(); handleNext(); }}>
            {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
            {currentStep === 0 && (
              <>
                <FormInput label="Vendor Name" value={formData.vendorName} onChange={e => setFormData(f => ({ ...f, vendorName: e.target.value }))} required />
                <FormInput label="Contact Name" value={formData.contactName} onChange={e => setFormData(f => ({ ...f, contactName: e.target.value }))} required />
                <FormInput label="Email" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} required />
                <FormInput label="Phone" value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} />
                <FormInput label="Address" value={formData.address} onChange={e => setFormData(f => ({ ...f, address: e.target.value }))} />
                <FormInput label="Tax ID" value={formData.taxId} onChange={e => setFormData(f => ({ ...f, taxId: e.target.value }))} />
              </>
            )}
            {currentStep === 1 && (
              <>
                <FormSelect
                  label="Legal Approved?"
                  value={formData.legalApproved}
                  onChange={val => setFormData(f => ({ ...f, legalApproved: val }))}
                  options={LEGAL_OPTIONS}
                  placeholder="Select approval status"
                  required
                />
                <FormTextarea
                  label="Legal Notes"
                  value={formData.legalNotes}
                  onChange={e => setFormData(f => ({ ...f, legalNotes: e.target.value }))}
                  placeholder="Add any legal notes..."
                />
              </>
            )}
            {currentStep === 2 && (
              <>
                <FormSelect
                  label="Security Risk Level"
                  value={formData.securityLevel}
                  onChange={val => setFormData(f => ({ ...f, securityLevel: val }))}
                  options={SECURITY_LEVELS}
                  placeholder="Select risk level"
                  required
                />
                <FormTextarea
                  label="Security Notes"
                  value={formData.securityNotes}
                  onChange={e => setFormData(f => ({ ...f, securityNotes: e.target.value }))}
                  placeholder="Add any security notes..."
                />
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="mb-6">
                  <div className="font-medium mb-2">Vendor Name: {formData.vendorName}</div>
                  <div className="mb-1">Contact: {formData.contactName}</div>
                  <div className="mb-1">Email: {formData.email}</div>
                  <div className="mb-1">Legal Approved: {formData.legalApproved}</div>
                  <div className="mb-1">Security Level: {formData.securityLevel}</div>
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
              </>
            )}
            <div className="flex justify-between mt-8">
              <Button type="button" variant="secondary" onClick={handleBack}>Back</Button>
              <div className="flex space-x-2">
                <Button type="button" variant="secondary" onClick={handleSaveDraft}>Save as Draft</Button>
                <Button type="submit" variant="primary">{currentStep === steps.length - 1 ? 'Submit' : 'Next'}</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 