import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from '../utils/data';
import { Link } from 'react-router-dom';

/* {footerLinks.map(({ id, title, links }) => (
  <div className='w-auto px-4' key={id}>
    <h2 className='font-medium text-white tracking-widest text-sm mb-3'>
      {title}
    </h2>
    <div className='mb-10 flex flex-col gap-3'>
      {links.map((link, index) => ( // Fixed variable name from indexedDB to index
        <Link to="/" className='text-gray-300 text-sm hover:text-white' key={index}>
          {link}
        </Link>
      ))}
    </div>
  </div>
))} */


const Footer = () => {
  return (
    <div className="text-white m-1"> {/* Changed from <Footer> to <div> */}
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "#1d4ed8",
            width: "130%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>
      <div className='bg-blue-500'>
        {/*1st sec*/}
        <div className='container px-5 py-20 mx-auto'>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-1 -px-4'>
            <div className="w-auto px-4">
              <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                Company
              </h2>
              <div className="mb-10 flex flex-col gap-3">
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  About Us
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Careers
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Blog
                </Link>
                <Link to="/" className='text-gray-300 hover:text-white text-sm '>
                  Our Team
                </Link>
              </div>
            </div>

            {/* Second section: Support */}
            <div className="w-auto px-4">
              <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                Support
              </h2>
              <div className="mb-10 flex flex-col gap-3">
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Help Center
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Contact Us
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Privacy Policy
                </Link>
              </div>

            </div>

            {/* Third section: Social */}
            <div className="w-auto px-4">
              <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                Social
              </h2>
              <div className="mb-10 flex flex-col gap-3">
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Facebook
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  Twitter
                </Link>
                <Link to="/" className="text-gray-300 text-sm hover:text-white">
                  LinkedIn
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-16 mx-auto max-w-xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
              Subscribe to our newsletter
            </h2>
            <form className="flex flex-col items-center sm:flex-row">
              <input
                placeholder="Your email"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border-2 border-transparent rounded sm:mr-2 sm:mb-0 text-black focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full h-12 px-6 font-semibold text-white transition duration-200 rounded sm:w-auto bg-blue-400 hover:bg-red-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
       {/* Footer Bottom with Icons */}
      <div className="bg-blue-600 py-4 text-center">
        <p className="text-gray-300 text-sm mb-4">
          &copy; {new Date().getFullYear()} JobSearch. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
            <FiInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
