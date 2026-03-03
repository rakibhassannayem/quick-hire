import React from 'react';
import Title from './shared/Title';
import Container from './shared/Container';
import { IoIosArrowRoundForward } from "react-icons/io";

const categories = [
  {
    id: 1,
    name: "Design",
    icon: "fa-solid fa-code",
    jobs: 235,
  },
  {
    id: 2,
    name: "Sales",
    icon: "fa-solid fa-mobile-screen-button",
    jobs: 756,
  },
  {
    id: 3,
    name: "Marketing",
    icon: "fa-solid fa-pen-to-square",
    jobs: 140,
  },
  {
    id: 4,
    name: "Finance",
    icon: "fa-solid fa-database",
    jobs: 325,
  },
  {
    id: 5,
    name: "Technology",
    icon: "fa-solid fa-bullhorn",
    jobs: 436,
  },
  {
    id: 6,
    name: "Engineering",
    icon: "fa-solid fa-pen-to-square",
    jobs: 542,
  },
  {
    id: 7,
    name: "Business",
    icon: "fa-solid fa-video",
    jobs: 211,
  },
  {
    id: 8,
    name: "Human Resource",
    icon: "fa-solid fa-pen-to-square",
    jobs: 346,
  },
];

const Categories = () => {
  return (
    <Container>
      <div className='flex items-center justify-between'>
        <Title>Explore by <span className='text-secondary'>Categories</span></Title>
        <button className='text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 hover:underline underline-offset-8 cursor-pointer'>Show all jobs <IoIosArrowRoundForward size={30} /></button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div key={category.id} className='bg-white hover:bg-primary/60 hover:text-white p-6 hover:shadow-md transition-all duration-300 cursor-pointer border border-neutral-500/20'>

            <div className='my-4 p-4 inline-block rounded-lg bg-primary/10'>
              <i className={`${category.icon} text-primary text-2xl`}></i>
            </div>

            <h3 className='text-xl pb-2 font-semibold'>{category.name}</h3>
            <div className='font-medium text-gray-500 flex items-center gap-2'>
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