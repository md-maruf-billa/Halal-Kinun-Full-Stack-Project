import Footer from '@/components/shared/Footer';
import Nav from '@/components/shared/Navbar/Nav';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div>
                  <Nav />
                  <main className='min-h-screen mt-4 container mx-auto'>{children}</main>
                  <Footer />
            </div>
      );
};

export default CommonLayout;