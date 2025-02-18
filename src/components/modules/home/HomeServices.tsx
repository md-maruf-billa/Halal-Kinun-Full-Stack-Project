import React from 'react';

import { Box, Car, Headset, ShoppingBag } from 'lucide-react';



const HomepageServices = () => {
      return (
            <div className='flex items-center justify-between p-10 bg-white shadow-lg rounded-xl mt-6'>

                  <div className='flex flex-col lg:flex-row text-center lg:text-left items-center gap-2'>
                        <div>
                              <Car className='w-10 h-10 text-customPrimary' />
                        </div>
                        <div className='space-y-1'>
                              <h3 className='text-customBlack font-semibold text-sm lg:text-base '>Free Shipping</h3>
                              <p className='text-customGray text-xs lg:text-sm'>Free shipping on all your order</p>
                        </div>
                  </div>
                  <div className='flex flex-col lg:flex-row text-center lg:text-left items-center gap-2'>
                        <div>
                              <Headset className='w-10 h-10 text-customPrimary' />
                        </div>
                        <div className='space-y-1'>
                              <h3 className='text-customBlack font-semibold text-sm lg:text-base '>Customer Support 24/7</h3>
                              <p className='text-customGray text-xs lg:text-sm'>Instant access to Support</p>
                        </div>
                  </div>
                  <div className='flex flex-col lg:flex-row text-center lg:text-left items-center gap-2'>
                        <div>
                              <ShoppingBag className='w-10 h-10 text-customPrimary' />
                        </div>
                        <div className='space-y-1'>
                              <h3 className='text-customBlack font-semibold text-sm lg:text-base '>100% Secure Payment</h3>
                              <p className='text-customGray text-xs lg:text-sm'>We ensure your money is save</p>
                        </div>
                  </div>
                  <div className='flex flex-col lg:flex-row text-center lg:text-left items-center gap-2'>
                        <div>
                              <Box className='w-10 h-10 text-customPrimary' />
                        </div>
                        <div className='space-y-1'>
                              <h3 className='text-customBlack font-semibold text-sm lg:text-base '>Money-Back Guarantee</h3>
                              <p className='text-customGray text-xs lg:text-sm'>30 Days Money-Back Guarantee</p>
                        </div>
                  </div>

            </div>
      );
};

export default HomepageServices;