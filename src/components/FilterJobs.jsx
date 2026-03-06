"use client"
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

const FilterJobs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories(categoryParam.split(','));
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  const toggleCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    let updatedCategories;

    if (selectedCategories.includes(cat)) {
      updatedCategories = selectedCategories.filter(c => c !== cat);
    } else {
      updatedCategories = [...selectedCategories, cat];
    }

    if (updatedCategories.length > 0) {
      params.set('category', updatedCategories.join(','));
    } else {
      params.delete('category');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-3">
      {categories.map((cat) => (
        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          <span className={`transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-[#515B6F] group-hover:text-primary'}`}>
            {cat}
          </span>
        </label>
      ))}
    </div>
  );
};

export default FilterJobs;