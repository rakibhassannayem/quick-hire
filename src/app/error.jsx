'use client';

import React, { useEffect } from 'react';
import { FiAlertCircle, FiRefreshCw, FiHome } from 'react-icons/fi';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
        <FiAlertCircle size={40} />
      </div>

      <h1 className="text-3xl font-extrabold text-[#25324B] mb-4">Something went wrong!</h1>
      <p className="text-gray-500 max-w-md mb-8">
        We encountered an unexpected error while processing your request.
        Don't worry, our team has been notified.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <FiRefreshCw className={error ? "animate-spin-slow" : ""} />
          Try Again
        </button>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#25324B] px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all"
        >
          <FiHome />
          Go Home
        </Link>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left w-full max-w-2xl overflow-auto text-xs font-mono text-red-500">
          <p className="font-bold mb-2">Error Detail (Dev Mode Only):</p>
          {error?.message || 'Unknown error'}
          <pre className="mt-2 whitespace-pre-wrap">{error?.stack}</pre>
        </div>
      )}
    </div>
  );
}
