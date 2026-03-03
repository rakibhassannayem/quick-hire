import React from 'react';
import Logo from './shared/Logo';
import Container from './shared/Container';
import Link from 'next/link';

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
              <fieldset className="w-80">
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
      </Container>


    </footer>
  );
};

export default Footer;