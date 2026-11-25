import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import { Studio } from '@/types';

const AllStudioPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/studios`,
        {
            cache: 'no-store'
        }
    )
    const data = await res.json()
    console.log(data)
    return (
        <div>
           {data.length===0 ?(
            <p className='mt-10 text-2xl text-center font-black'>No Studio have been listed yet.</p>
           ):(
             <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="mb-6 font-heading text-3xl font-bold">Featured studios</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((studio:Studio, idx: number) => {
            return <article key={idx} className="flex h-full flex-col overflow-hidden border border-line bg-card">
              <div className="relative aspect-4/3">
                    <Image src={studio.imageUrl || "/next.svg"} alt={`Interior of ${studio.title}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <p className="text-xs text-accent">{studio.category}</p>
                    <h3 className="font-heading text-lg font-semibold">{studio.title}</h3>
                    <p className="flex items-center gap-1 text-sm text-muted"><MapPin className="h-4 w-4" />{studio.location}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <p className="text-sm"><strong>${studio.hourlyRate}</strong>/hr · <Star className="inline h-3 w-3 fill-accent text-accent" /> {studio.rating}</p>
                      <Link href={`/studios/${studio._id}`} className="bg-ink px-3 py-2 text-sm text-page">View details</Link>
                    </div>
                  </div>
                </article>
          })}
        </div>
            </section>
           )}
        </div>
    );
};

export default AllStudioPage;