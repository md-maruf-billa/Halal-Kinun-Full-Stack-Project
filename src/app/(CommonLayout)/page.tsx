import { Button } from '@/components/ui/button';
import { getLogeduser } from '@/services/authService';
import React from 'react';

const CommonLayoutHomePage = async () => {
  const user = await getLogeduser()
  console.log(user)
  return (
    <div>
      <Button>Click me</Button>
      Hi every one
    </div>
  );
};

export default CommonLayoutHomePage;