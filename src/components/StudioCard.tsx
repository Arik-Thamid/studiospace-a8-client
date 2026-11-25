import { Studio } from '@/types';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StudioCard = ({ studio }: { studio: Studio }) => {
    return (
        <article className="flex h-full flex-col overflow-hidden border border-line bg-card">
      <div className="relative aspect-[4/3]">
        <Image src={studio.image} alt={`Interior of ${studio.title}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs text-accent">{studio.category}</p>
        <h3 className="font-heading text-lg font-semibold">{studio.title}</h3>
        <p className="flex items-center gap-1 text-sm text-muted"><MapPin className="h-4 w-4" />{studio.location}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <p className="text-sm"><strong>${studio.hourlyRate}</strong>/hr · <Star className="inline h-3 w-3 fill-accent text-accent" /> {studio.rating}</p>
          <Link href={`/studios/${studio.id}`} className="bg-ink px-3 py-2 text-sm text-page">View details</Link>
        </div>
      </div>
    </article>
    );
};

export default StudioCard;