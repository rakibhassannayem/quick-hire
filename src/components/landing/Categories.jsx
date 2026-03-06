import React from 'react';
import Title from '../shared/Title';
import Container from '../shared/Container';
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FiLayers,
  FiTrendingUp,
  FiTarget,
  FiPieChart,
  FiCpu,
  FiSettings,
  FiBriefcase,
  FiUsers
} from "react-icons/fi";
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Design",
    icon: FiLayers,
    jobs: 235,
  },
  {
    id: 2,
    name: "Sales",
    icon: FiTrendingUp,
    jobs: 756,
  },
  {
    id: 3,
    name: "Marketing",
    icon: FiTarget,
    jobs: 140,
  },
  {
    id: 4,
    name: "Finance",
    icon: FiPieChart,
    jobs: 325,
  },
  {
    id: 5,
    name: "Technology",
    icon: FiCpu,
    jobs: 436,
  },
  {
    id: 6,
    name: "Engineering",
    icon: FiSettings,
    jobs: 542,
  },
  {
    id: 7,
    name: "Business",
    icon: FiBriefcase,
    jobs: 211,
  },
  {
    id: 8,
    name: "Human Resource",
    icon: FiUsers,
    jobs: 346,
  },
];

const Categories = () => {
  return (
    <Container>
      <div className='flex items-center justify-between'>
        <Title>Explore by <span className='text-secondary'>Categories</span></Title>
        <Link href={'/allJobs'} className='text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:underline underline-offset-8 cursor-pointer'>Show all jobs <IoIosArrowRoundForward size={30} /></Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div key={category.id} className='bg-white group hover:bg-primary hover:text-white p-6 hover:shadow-md transition-all duration-300 cursor-pointer border border-neutral-500/20'>

            <div className='my-4 inline-block rounded-lg  group-hover:bg-white/20 transition-colors'>
              <category.icon className='text-primary group-hover:text-white text-4xl' />
            </div>

            <h3 className='text-xl pb-2 font-semibold'>{category.name}</h3>
            <div className='font-medium text-gray-500 group-hover:text-white flex items-center gap-2'>
              {category.jobs} jobs available
              <IoIosArrowRoundForward size={20} />
            </div>

          </div>
        ))}
      </div>
    </Container>

  );
};

export default Categories;