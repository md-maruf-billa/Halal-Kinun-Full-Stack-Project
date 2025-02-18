import Banner from '@/components/modules/home/Banner';
import HomePopularCategories from '@/components/modules/home/HomePagePopularCategories';
import HomepageServices from '@/components/modules/home/HomeServices';
import { getLogeduser } from '@/services/authService';
import React from 'react';

const CommonLayoutHomePage = async () => {
  const user = await getLogeduser()
  console.log(user)
  return (
    <div>
      <Banner />
      <HomepageServices />
      <HomePopularCategories />
    </div>
  );
};

export default CommonLayoutHomePage;