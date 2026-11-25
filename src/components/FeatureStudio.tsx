import { Studio } from '@/types';
import React from 'react';
import StudioCard from './StudioCard';

const FeatureStudio = () => {
    const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;
    const studios: (Studio & { id: string; securityDeposit: number; image: string })[] = [
  { id: "1", _id: "1", title: "North Light Photo Loft", category: "Photo Studio", location: "Dhaka", hourlyRate: 45, securityDeposit: 100, deposit: 100, maxCapacity: 12, rating: 4.8,
    image: photo("photo-1492691527719-9d1e07e534b4"), imageUrl: photo("photo-1492691527719-9d1e07e534b4"), amenities: ["Natural light", "Backdrops", "Strobe kit", "Wi-Fi"],
    overview: "A bright corner loft with tall north-facing windows, a white cyclorama wall and a changing area.", hostName: "Nadia Rahman", hostEmail: "nadia@example.com" },
  { id: "2", _id: "2", title: "Blackbox Film Stage", category: "Film Stage", location: "Chattogram", hourlyRate: 120, securityDeposit: 300, deposit: 300, maxCapacity: 30, rating: 4.9,
    image: photo("photo-1478720568477-152d9b164e26"), imageUrl: photo("photo-1478720568477-152d9b164e26"), amenities: ["Lighting grid", "Green screen", "Power access", "Parking"],
    overview: "A soundproofed stage with a lighting grid and a green screen, built for short films and ad shoots.", hostName: "Imran Hossain", hostEmail: "imran@example.com" },
  { id: "3", _id: "3", title: "Quiet Room Podcast Lounge", category: "Podcast Lounge", location: "Dhaka", hourlyRate: 25, securityDeposit: 50, deposit: 50, maxCapacity: 4, rating: 4.7,
    image: photo("photo-1590602847861-f357a9332bbc"), imageUrl: photo("photo-1590602847861-f357a9332bbc"), amenities: ["4 microphones", "Acoustic panels", "Mixer", "Tea & water"],
    overview: "A small treated room with four mic stations. Ideal for interviews and weekly shows.", hostName: "Nadia Rahman", hostEmail: "nadia@example.com" },
  { id: "4", _id: "4", title: "Sunset Music Suite", category: "Music Suite", location: "Sylhet", hourlyRate: 35, securityDeposit: 80, deposit: 80, maxCapacity: 8, rating: 4.6,
    image: photo("photo-1511379938547-c1f69419868d"), imageUrl: photo("photo-1511379938547-c1f69419868d"), amenities: ["Drum kit", "Amps", "PA system", "Air conditioning"],
    overview: "A rehearsal and recording suite with a full backline, so bands only need to bring their instruments.", hostName: "Tahsin Ali", hostEmail: "tahsin@example.com" },
  { id: "5", _id: "5", title: "Clay & Canvas Workshop", category: "Workshop", location: "Khulna", hourlyRate: 20, securityDeposit: 40, deposit: 40, maxCapacity: 15, rating: 4.5,
    image: photo("photo-1513364776144-60967b0f800f"), imageUrl: photo("photo-1513364776144-60967b0f800f"), amenities: ["Easels", "Pottery wheels", "Sink", "Storage shelves"],
    overview: "A messy-friendly workshop with easels, two pottery wheels and plenty of table space.", hostName: "Tahsin Ali", hostEmail: "tahsin@example.com" },
  { id: "6", _id: "6", title: "Concrete Daylight Studio", category: "Photo Studio", location: "Chattogram", hourlyRate: 60, securityDeposit: 150, deposit: 150, maxCapacity: 10, rating: 4.8,
    image: photo("photo-1516035069371-29a1b244cc32"), imageUrl: photo("photo-1516035069371-29a1b244cc32"), amenities: ["Concrete backdrop", "Daylight windows", "Makeup station", "Wi-Fi"],
    overview: "Raw concrete walls and big windows give this studio a moody, editorial look.", hostName: "Imran Hossain", hostEmail: "imran@example.com" },
];
    return (
        <div>
            <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="mb-6 font-heading text-3xl font-bold">Featured studios</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studios.map((studio) => <StudioCard key={studio.id} studio={studio} />)}
        </div>
      </section>
        </div>
    );
};

export default FeatureStudio;