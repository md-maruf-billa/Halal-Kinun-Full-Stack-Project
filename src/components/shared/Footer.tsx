import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from "@/assets/icons/logo.png"

const Footer = () => {
      const date = new Date().getFullYear()
      return (

            <footer className="bg-[#f2f2f2]">
                  <div className="container px-6 py-12 mx-auto">
                        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                              <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                              <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                                    <Button>Sign Up Now</Button>
                              </div>
                        </div>

                        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                                    <div className="flex flex-col items-start mt-5 space-y-2">
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                                    </div>
                              </div>

                              <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                                    <div className="flex flex-col items-start mt-5 space-y-2">
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                                    </div>
                              </div>

                              <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">Services</p>

                                    <div className="flex flex-col items-start mt-5 space-y-2">
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Translation</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</a>
                                    </div>
                              </div>

                              <div>
                                    <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                                    <div className="flex flex-col items-start mt-5 space-y-2">
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 1730827996</a>
                                          <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">dev.abumahid@gmail.com</a>
                                    </div>
                              </div>
                        </div>

                        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                        <div className="flex flex-col items-center justify-between sm:flex-row">

                              <div className='flex items-center gap-2'>
                                    <Image src={logo} width={40} height={40} alt="halal kinun" />
                                    <h2 className='text-2xl italic font-bold'>Halal Kinun</h2>
                              </div>


                              <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright {date}. All Rights Reserved.</p>
                        </div>
                  </div>

            </footer>
      );
};

export default Footer;