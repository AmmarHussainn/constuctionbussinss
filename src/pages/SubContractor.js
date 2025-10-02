import React, { useEffect, useState } from 'react';
import { 
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Award,
  FileText,
  Shield,
  CheckCircle,
  Send,
  ArrowRight,
  Sparkles,
  Users,
  Calendar,
  Wrench,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

const SubContractor = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    contactPersonDesignation: '',
    phoneNumber: '',
    email: '',
    officeAddress: '',
    companyWebsite: '',
    businessType: '',
    yearsInOperation: '',
    areasOfExpertise: '',
    pastProjectReferences: '',
    companyRegistrationNumber: '',
    taxRegistrationNumber: '',
    relevantLicenses: '',
    notBlacklisted: true,
    annualTurnover: '',
    numberOfEmployees: '',
    equipmentOwned: '',
    hsePolicy: '',
    safetyRecord: '',
    companyProfile: '',
    cnicOfOwners: '',
    workCompletionCertificates: '',
    declarationConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Validate required fields
    if (!formData.companyName || !formData.contactPersonName || !formData.contactPersonDesignation || 
        !formData.phoneNumber || !formData.email || !formData.declarationConsent) {
      setSubmitStatus('validation');
      // Scroll to top to show validation message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Convert numeric fields
      const submitData = {
        ...formData,
        yearsInOperation: formData.yearsInOperation ? parseInt(formData.yearsInOperation) : undefined,
        numberOfEmployees: formData.numberOfEmployees ? parseInt(formData.numberOfEmployees) : undefined
      };

      const response = await fetch('https://voice-unitech.onrender.com/api/companies/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactPersonName: '',
          contactPersonDesignation: '',
          phoneNumber: '',
          email: '',
          officeAddress: '',
          companyWebsite: '',
          businessType: '',
          yearsInOperation: '',
          areasOfExpertise: '',
          pastProjectReferences: '',
          companyRegistrationNumber: '',
          taxRegistrationNumber: '',
          relevantLicenses: '',
          notBlacklisted: true,
          annualTurnover: '',
          numberOfEmployees: '',
          equipmentOwned: '',
          hsePolicy: '',
          safetyRecord: '',
          companyProfile: '',
          cnicOfOwners: '',
          workCompletionCertificates: '',
          declarationConsent: false
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Verified Partnership",
      description: "Become a verified subcontractor partner"
    },
    {
      icon: Briefcase,
      title: "Project Opportunities",
      description: "Access to major government & private projects"
    },
    {
      icon: Shield,
      title: "Trusted Network",
      description: "Join our trusted network of contractors"
    }
  ];

  return (
    <div className="bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .input-field {
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          transform: translateY(-2px);
        }
        
        .gradient-border {
          position: relative;
          background: white;
          border-radius: 24px;
        }
        
        .gradient-border::before {
          content: '';
        
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #FBBF24, #F59E0B, #FBBF24);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .gradient-border:hover::before {
          opacity: 1;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
       

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">JOIN OUR NETWORK</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Become a
            <br />
            <span className="text-yellow-400">Sub Contractor</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-2">
            Partner with us on major construction projects across Pakistan. Register your company and join our trusted network of subcontractors
          </p>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="fade-in-up gradient-border bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 rounded-full mb-6">
                <FileText className="text-yellow-400" size={16} />
                <span className="text-yellow-400 text-sm font-semibold">REGISTRATION FORM</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Register Your Company
              </h2>
              <p className="text-gray-600 text-lg">
                Fill in the details below to get started. Fields marked with * are required
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 flex items-center gap-3 p-5 bg-green-50 border-2 border-green-200 rounded-2xl">
                <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
                <div>
                  <p className="text-green-800 font-bold text-lg">Registration Successful!</p>
                  <p className="text-green-700">We'll review your application and contact you soon.</p>
                </div>
              </div>
            )}

            {submitStatus === 'validation' && (
              <div className="mb-8 flex items-center gap-3 p-5 bg-red-50 border-2 border-red-200 rounded-2xl">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">!</div>
                <div>
                  <p className="text-red-800 font-bold">Please fill in all required fields</p>
                  <p className="text-red-700 text-sm">Company Name, Contact Person, Designation, Phone, Email, and Declaration are required</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 flex items-center gap-3 p-5 bg-red-50 border-2 border-red-200 rounded-2xl">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">!</div>
                <p className="text-red-800 font-semibold">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* FORM ELEMENT WRAPPER - KEY FIX */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* COMPANY INFORMATION */}
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <Building2 className="text-yellow-400" size={24} />
                    Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g., Tech Builders Pvt Ltd"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all bg-white"
                      >
                        <option value="">Select Type</option>
                        <option value="Pvt Ltd">Pvt Ltd</option>
                        <option value="Public Ltd">Public Ltd</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Years in Operation
                      </label>
                      <input
                        type="number"
                        name="yearsInOperation"
                        value={formData.yearsInOperation}
                        onChange={handleChange}
                        placeholder="e.g., 5"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Office Address
                      </label>
                      <input
                        type="text"
                        name="officeAddress"
                        value={formData.officeAddress}
                        onChange={handleChange}
                        placeholder="Complete office address"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Company Website
                      </label>
                      <input
                        type="text"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Number of Employees
                      </label>
                      <input
                        type="number"
                        name="numberOfEmployees"
                        value={formData.numberOfEmployees}
                        onChange={handleChange}
                        placeholder="e.g., 120"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* CONTACT PERSON */}
                <div className="border-t-2 border-gray-100 pt-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <User className="text-yellow-400" size={24} />
                    Contact Person Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={handleChange}
                        placeholder="e.g., Ali Khan"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Designation *
                      </label>
                      <input
                        type="text"
                        name="contactPersonDesignation"
                        value={formData.contactPersonDesignation}
                        onChange={handleChange}
                        placeholder="e.g., CEO, Director"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+92-333-9876543"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@company.com"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* EXPERTISE & EXPERIENCE */}
                <div className="border-t-2 border-gray-100 pt-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <Award className="text-yellow-400" size={24} />
                    Expertise & Experience
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Areas of Expertise
                      </label>
                      <input
                        type="text"
                        name="areasOfExpertise"
                        value={formData.areasOfExpertise}
                        onChange={handleChange}
                        placeholder="e.g., Road Works, Electrical, Mechanical"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Past Project References
                      </label>
                      <textarea
                        name="pastProjectReferences"
                        value={formData.pastProjectReferences}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe your major completed projects"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Equipment Owned
                      </label>
                      <input
                        type="text"
                        name="equipmentOwned"
                        value={formData.equipmentOwned}
                        onChange={handleChange}
                        placeholder="e.g., Excavators, Mixers, Bulldozers"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Company Profile
                      </label>
                      <textarea
                        name="companyProfile"
                        value={formData.companyProfile}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Brief profile summary of your company"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* LEGAL & FINANCIAL */}
                <div className="border-t-2 border-gray-100 pt-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="text-yellow-400" size={24} />
                    Legal & Financial Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Company Registration Number
                      </label>
                      <input
                        type="text"
                        name="companyRegistrationNumber"
                        value={formData.companyRegistrationNumber}
                        onChange={handleChange}
                        placeholder="e.g., REG-12345"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Tax Registration Number (NTN)
                      </label>
                      <input
                        type="text"
                        name="taxRegistrationNumber"
                        value={formData.taxRegistrationNumber}
                        onChange={handleChange}
                        placeholder="e.g., NTN-67890"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Annual Turnover
                      </label>
                      <input
                        type="text"
                        name="annualTurnover"
                        value={formData.annualTurnover}
                        onChange={handleChange}
                        placeholder="e.g., 100M PKR"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        CNIC of Owners
                      </label>
                      <input
                        type="text"
                        name="cnicOfOwners"
                        value={formData.cnicOfOwners}
                        onChange={handleChange}
                        placeholder="e.g., CNIC123456, CNIC654321"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Relevant Licenses
                      </label>
                      <input
                        type="text"
                        name="relevantLicenses"
                        value={formData.relevantLicenses}
                        onChange={handleChange}
                        placeholder="e.g., PEC Class A, SECP Registered"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Work Completion Certificates
                      </label>
                      <textarea
                        name="workCompletionCertificates"
                        value={formData.workCompletionCertificates}
                        onChange={handleChange}
                        rows={3}
                        placeholder="List your work completion certificates"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* HEALTH & SAFETY */}
                <div className="border-t-2 border-gray-100 pt-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-yellow-400" size={24} />
                    Health, Safety & Environment
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        HSE Policy
                      </label>
                      <textarea
                        name="hsePolicy"
                        value={formData.hsePolicy}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., We follow ISO 45001"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Safety Record
                      </label>
                      <textarea
                        name="safetyRecord"
                        value={formData.safetyRecord}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., Zero incidents in last 3 years"
                        className="input-field w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* DECLARATION */}
                <div className="border-t-2 border-gray-100 pt-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                    <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                      <FileText className="text-yellow-400" size={24} />
                      Declaration & Consent
                    </h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="flex-shrink-0 mt-1">
                          <input
                            type="checkbox"
                            name="notBlacklisted"
                            checked={formData.notBlacklisted}
                            onChange={handleChange}
                            className="w-5 h-5 text-yellow-400 border-2 border-gray-300 rounded focus:ring-yellow-400 focus:ring-2"
                          />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          I confirm that our company is <strong>not blacklisted</strong> by any government or private organization
                        </span>
                      </label>

                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="flex-shrink-0 mt-1">
                          <input
                            type="checkbox"
                            name="declarationConsent"
                            checked={formData.declarationConsent}
                            onChange={handleChange}
                            className="w-5 h-5 text-yellow-400 border-2 border-gray-300 rounded focus:ring-yellow-400 focus:ring-2"
                            required
                          />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          <strong className="text-gray-900">* Required:</strong> I declare that all information provided is accurate and complete. I consent to M/S HBAS & CO verifying this information and contacting us for project opportunities.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                        Submitting Registration...
                      </>
                    ) : (
                      <>
                        <Send size={24} strokeWidth={2.5} />
                        Submit Registration
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    We'll review your application and contact you within 48 hours
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubContractor;