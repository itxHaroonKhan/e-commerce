import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Image from 'next/image';


const Footer = () => {
  return (
    <div>
      
      <footer className="text-gray-600 body-font">
        <hr />
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap md:text-left text-center order-first">
    
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
      <div className='flex  items-center mb-6'>
      <Image
  src="/Logo Icon.png"
  alt="Logo"
  width={40} // Set width
  height={40} // Set height
  className="ml-4 sm:ml-14"
/>

        <h2 className="title-font  text-gray-900 tracking-widest font-bold text-sm ml-2 text-[20px]">
        Comforty
        </h2>
        </div>
        <nav className="list-none mb-10">
          <ul>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus </a>
          </li>
          </ul>
          <div className='flex gap-6 mt-6 '>
          <FaFacebook  className='size-5' />
          <FaTwitter className='size-5'/>
          <IoLogoInstagram className='size-5' />
          <FaPinterest className='size-5'/>
          <IoLogoYoutube className='size-5'/>
          </div>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <ul>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Category</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sofa</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Armchair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wing Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Desk Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">wooden Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
          </li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Support
        </h2>
        <nav className="list-none mb-10">
         <ul>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help & Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Tearms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help</a>
          </li>
          </ul> 
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Newsletter
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
           
            <input
              type="text"
              id="footer-field"
              placeholder='Your email'
              name="footer-field"
              className="w-[285px]  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
        </p>
      </div>
    </div>
  </div>
  <hr />
  <div className="bg-white h-[75px] ">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
      @ 2021 - Blogy - Designed & Develop by <span className='text-black font-semibold'> Zakirsoft</span>
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Image
        src="/Frame 69.png" // Your image path
        alt="Logo or Image"
        width={227} // Adjust the width as needed
        height={27} // Adjust the height as needed
      />

              </span>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Footer;
