import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
      <img src="/logo.png" alt="logo" className='w-10 h-10' />
      <h2 className='text-3xl font-bold'>QuickHire</h2>
    </Link>
  );
};

export default Logo;