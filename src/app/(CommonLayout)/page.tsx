import Banner from '@/components/modules/home/Banner';
import { Button } from '@/components/ui/button';
import { getLogeduser } from '@/services/authService';
import React from 'react';

const CommonLayoutHomePage = async () => {
  const user = await getLogeduser()
  console.log(user)
  return (
    <div>
      <Banner />
    </div>
  );
};

export default CommonLayoutHomePage;