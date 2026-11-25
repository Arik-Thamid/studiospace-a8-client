import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrowseCategory = () => {
    const categories = [
  { label: "Photo Studios", value: "Photo Studio", image: "photo-1492691527719-9d1e07e534b4" },
  { label: "Film Stages", value: "Film Stage", image: "photo-1478720568477-152d9b164e26" },
  { label: "Podcast Rooms", value: "Podcast Lounge", image: "photo-1590602847861-f357a9332bbc" },
  { label: "Music Suites", value: "Music Suite", image: "photo-1511379938547-c1f69419868d" },
  { label: "Art Workshops", value: "Workshop", image: "photo-1513364776144-60967b0f800f" },
];
    return (
        <div>
            <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="mb-6 font-heading text-3xl font-bold">Browse by category</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {categories.map((c) => (
            <Link key={c.value} href={`/studios?category=${encodeURIComponent(c.value)}`} className="group relative block aspect-[3/4] overflow-hidden">
              <Image src={`https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=600&q=70`} alt="" fill sizes="20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-black/60 p-3 font-heading text-white">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>
        </div>
    );
};

export default BrowseCategory;