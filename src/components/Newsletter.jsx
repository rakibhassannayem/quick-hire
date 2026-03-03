import Container from './shared/Container';
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ['latin'],
});

const Newsletter = () => {
  return (
    <Container className={`${saira.className} relative`}>
      {/* Clipped Background Layer */}
      <div className='absolute inset-0 bg-primary clip-custom -z-10'></div>

      {/* Content Layer */}
      <div className='p-15 px-10 md:px-20 text-white flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='space-y-5 py-10 md:py-0'>
          <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>Start posting <br className='hidden md:block' />jobs today</h1>
          <p className='text-lg opacity-90'>Start posting jobs for only $10.</p>
          <button className='bg-white text-primary px-8 py-3 font-bold text-lg hover:bg-gray-100 transition-colors'>
            Sign Up For Free
          </button>
        </div>

        {/* Image - positioned to overflow the clipped background if needed */}
        <div className='relative md:-mb-10 lg:-mb-16 max-w-md lg:max-w-xl self-end'>
          <img
            src="/dashboard.png"
            alt="dashboard"
            className='w-full h-auto drop-shadow-2xl'
          />
        </div>
      </div>
    </Container >
  );
};

export default Newsletter;