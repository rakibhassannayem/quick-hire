"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from "@/components/shared/Container";
import { FiPlus, FiLayout, FiSettings, FiHome, FiLogOut } from "react-icons/fi";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
    { name: 'Add New Job', href: '/add-job', icon: <FiPlus /> },
    { name: 'Manage Jobs', href: '/manage-jobs', icon: <FiLayout /> },
  ];

  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-white border-r border-gray-100 p-8 flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <FiSettings size={20} />
            </div>
            <h2 className="text-xl font-bold text-[#25324B]">Admin Panel</h2>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-[#515B6F] hover:bg-primary/5 hover:text-primary'}`}
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-gray-50">
            <Link href="/" className="flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all">
              <FiLogOut size={20} /> Logout
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
          <Container>
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
