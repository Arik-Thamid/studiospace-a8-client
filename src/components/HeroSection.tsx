import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section className="relative h-[70vh] min-h-[420px]">
        <Image src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=70"
          alt="A film set with studio lighting" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14 text-white">
          <h1 className="max-w-2xl font-serif text-4xl sm:text-6xl">Space to Create Something Extraordinary.</h1>
          <p className="mt-4 max-w-lg">Discover inspiring creative spaces built for your next production.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/studios" className="bg-accent px-5 py-3 font-medium">Explore Studios</Link>
            <Link href="/studios" className="border border-white px-5 py-3">Host Your Space</Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default HeroSection;