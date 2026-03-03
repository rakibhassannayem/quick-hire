import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
      <img src="/logo.png" alt="" />
      <h2 className='text-2xl font-bold'>Quick Hire</h2>
    </Link>
  );
};

export default Logo;