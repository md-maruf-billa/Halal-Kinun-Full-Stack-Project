"use client"
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavEnd = () => {
      const pathName = usePathname()
      return (
            <div className='bg-[#f2f2f2] py-6'>
                  <div className="container mx-auto flex justify-between items-center">
                        <div className='flex items-center gap-6'>
                              <Link href={"/"} className={`${pathName == "/" ? "text-customPrimary font-bold" : "text-customSecondary "}`}>Home</Link>
                              <Link href={"/products"} className={`${pathName == "/products" ? "text-customPrimary font-bold" : "text-customSecondary "}`}>Product's</Link>
                              <Link href={"/updates"} className={`${pathName == "/updates" ? "text-customPrimary font-bold" : "text-customSecondary "}`}>Update's</Link>
                              <Link href={"/about-us"} className={`${pathName == "/about-us" ? "text-customPrimary font-bold" : "text-customSecondary "}`}>About us</Link>
                              <Link href={"/contact-us"} className={`${pathName == "/contact-us" ? "text-customPrimary font-bold" : "text-customSecondary "}`}>Contact us</Link>
                        </div>
                        <div className='flex items-center gap-2 text-customSecondary'><PhoneCall className='text-xs' />01730827996</div>
                  </div>
            </div>
      );
};

export default NavEnd;