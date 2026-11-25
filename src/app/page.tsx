import BrowseCategory from '@/components/BrowseCategory';
import FeatureStudio from '@/components/FeatureStudio';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureStudio/>
      <BrowseCategory/>
    </div>
  );
};

export default page;