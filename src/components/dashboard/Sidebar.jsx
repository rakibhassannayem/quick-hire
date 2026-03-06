"use client"
import Logo from '../shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSettings, FiLogOut, FiHome, FiPlus, FiLayout, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
  { name: 'Add New Job', href: '/dashboard/add-job', icon: <FiPlus /> },
  { name: 'Manage Jobs', href: '/dashboard/manage-jobs', icon: <FiLayout /> },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 p-8 flex flex-col gap-8 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-4 gap-4">
          <Logo titleClassName="text-2xl" />
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-500"
          >
            <FiX size={24} />
          </button>
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
    </>
  );
};

export default Sidebar;