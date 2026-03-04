import Container from './shared/Container';
import Link from 'next/link';
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-[#202430] text-gray-400 p-10">
      <Container>
        <div className="footer sm:footer-horizontal">
          <aside>
            <Link href={'/'} className='flex items-center gap-2'>
              <img src="/logo.png" alt="" />
              <h2 className='text-2xl font-bold text-white'>QuickHire</h2>
            </Link>
            <p>
              Great platform for the job seeker that<br /> passionate about startups. Find your dream job<br /> easier.
            </p>
          </aside>
          <nav>
            <h6 className="text-lg font-semibold text-white">About</h6>
            <a className="link link-hover">Companies</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Terms</a>
            <a className="link link-hover">Advice</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
          <nav>
            <h6 className="text-lg font-semibold text-white">Resources</h6>
            <a className="link link-hover">Help Docs</a>
            <a className="link link-hover">Guide</a>
            <a className="link link-hover">Updates</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
          <nav>
            <form>
              <h6 className="text-lg font-semibold text-white">Get job notifications</h6>
              <p className='pb-6 pt-1'>The latest job news, articles, sent to <br />your inbox weekly.</p>
              <fieldset className="max-w-80">
                <div className="flex gap-1">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="input input-bordered rounded-none" />
                  <button className="btn btn-primary text-white rounded-none">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </nav>
        </div>
        <hr className='my-4 border-gray-500' />
        <footer className="footer sm:footer-horizontal text-neutral-content items-center py-4">
          <aside className="grid-flow-col items-center text-gray-400">
            <p>{new Date().getFullYear()} @ QuicHire. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a className='bg-gray-600 rounded-full p-1.5'>
              <RiFacebookFill size={20} />
            </a>

            <a className='bg-gray-600 rounded-full p-1.5'>
              <RiInstagramLine size={20} />
            </a>

            <a className='bg-gray-600 rounded-full p-1.5'>
              <BsGlobe2 size={20} />
            </a>

            <a className='bg-gray-600 rounded-full p-1.5'>
              <RiLinkedinFill size={20} />
            </a>

            <a className='bg-gray-600 rounded-full p-1.5'>
              <RiTwitterFill size={20} />
            </a>
            
          </nav>
        </footer>
      </Container>


    </footer>
  );
};

export default Footer;