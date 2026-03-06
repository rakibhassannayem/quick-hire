"use client"
import Sidebar from '@/components/dashboard/Sidebar';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '@/components/shared/Logo';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex min-h-screen bg-gray-50'>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between z-30">
        <Logo />
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
        >
          <FiMenu size={24} />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className='flex-1 lg:p-8 p-6 pt-24 lg:pt-8'>
        {children}
      </main>
    </div>
  );
};

export default Layout;