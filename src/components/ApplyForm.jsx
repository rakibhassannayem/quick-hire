"use client";

import React, { useState } from 'react';
import { FiX, FiUser, FiMail, FiLink, FiFileText, FiSend } from "react-icons/fi";

const ApplyForm = ({ jobTitle, companyName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    coverNote: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isSuccess) setIsSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        resumeLink: '',
        coverNote: ''
      });
    }, 500);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 transform"
      >
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="bg-primary/5 px-8 py-6 flex items-center justify-between border-b border-primary/10">
              <div>
                <h2 className="text-2xl font-bold text-[#25324B]">Apply for Position</h2>
                <p className="text-gray-500 text-sm mt-1">{jobTitle} at <span className="text-primary font-semibold">{companyName}</span></p>
              </div>
              <button
                onClick={toggleModal}
                className="p-2 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiSend size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#25324B] mb-2">Application Sent!</h3>
                  <p className="text-gray-500 mb-8 text-lg">Your application has been successfully sent to <span className="font-semibold">{companyName}</span>. Good luck!</p>
                  <button
                    onClick={toggleModal}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#25324B] flex items-center gap-2">
                        <FiUser className="text-primary" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-[#25324B] flex items-center gap-2">
                        <FiMail className="text-primary" /> Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="resumeLink" className="text-sm font-bold text-[#25324B] flex items-center gap-2">
                      <FiLink className="text-primary" /> Resume Link (Google Drive, Dropbox, etc.)
                    </label>
                    <input
                      required
                      type="url"
                      name="resumeLink"
                      id="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="coverNote" className="text-sm font-bold text-[#25324B] flex items-center gap-2">
                      <FiFileText className="text-primary" /> Cover Note
                    </label>
                    <textarea
                      required
                      name="coverNote"
                      id="coverNote"
                      rows="4"
                      value={formData.coverNote}
                      onChange={handleChange}
                      placeholder="Tell us why you're a great fit for this role..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-300"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-primary/20"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Submit Application <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="px-8 py-4 bg-gray-100 text-[#25324B] font-bold rounded-xl hover:bg-gray-200 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyForm;
