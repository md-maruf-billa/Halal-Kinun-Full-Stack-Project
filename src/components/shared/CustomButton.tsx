import { ArrowRight } from 'lucide-react';
import React from 'react';

const CustomButton = () => {
      return (
            <button className='flex items-center gap-2 text-[#00b207] text-sm md:text-base hover:underline'>View all <ArrowRight /></button>
      )
};

export default CustomButton;

