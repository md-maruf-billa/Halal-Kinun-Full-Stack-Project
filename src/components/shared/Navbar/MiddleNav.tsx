import Image from 'next/image';
import React from 'react';
import logo from "@/assets/icons/logo.png"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Search, ShoppingBag } from 'lucide-react';
const MiddleNav = () => {
      return (
            <div className='container mx-auto flex justify-between items-center py-4'>
                  {/* start */}
                  <div className='flex items-center gap-2'>
                        <Image
                              src={logo}
                              width={32}
                              height={32}
                              alt='Shop logo Halal Kinun'
                        />
                        <h1 className='text-customBlack text-3xl font-bold italic'>Halal Kinun</h1>
                  </div>
                  {/* middle */}

                  <div className="w-full max-w-sm relative ">
                        <Input type="text" placeholder="Search" className='rounded-full' />
                        <Search className='absolute top-1/2 -translate-y-1/2 right-2 text-customGray' />
                  </div>

                  {/* end */}
                  <div className='flex items-center gap-4'>
                        <div className='pr-4 border-r-2 text-xl hover:text-customPrimary cursor-pointer'><Heart /></div>

                        <div className='flex items-center gap-5'>
                              <div className='relative '>
                                    <ShoppingBag className='text-xl cursor-pointer hover:text-customPrimary' />
                                    <div className='-top-3 -right-3 size-[25px] flex bg-customPrimary justify-center items-center border absolute rounded-full'>
                                          <p className='text-sm text-white '>2</p>
                                    </div>
                              </div>
                              <div>
                                    <p className='text-sm text-customGray italic'>Shopping cart:</p>
                                    <h3 className='text-xl font-bold text-customBlack'>$57.00</h3>
                              </div>
                        </div>
                  </div>


            </div>
      );
};

export default MiddleNav;