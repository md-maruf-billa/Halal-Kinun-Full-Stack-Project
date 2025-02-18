import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
      return (
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack'>{title}</h2>
      );
};

export default SectionTitle;