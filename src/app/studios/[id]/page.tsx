
import BookingCard from "@/components/BookingCard";
import { Studio } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";




const StudioDetailsPage = async ({ params,}: { params: Promise<{ id: string }>}) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/studios/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const response = await res.json();
  const data: Studio = response.studio ?? response;
  const amenities = Array.isArray(data.amenities)
  ? data.amenities
  : data.amenities
    ? [data.amenities]
    : [];



  return (
    <main className="min-h-screen bg-[#f8f7f3] px-5 py-5 text-[#242424]">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-3 text-[11px] text-gray-500">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Studios</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{data.title}</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[2fr_1fr]">
          {/* Studio Details */}
          <section>
            <div className="relative h-[250px] overflow-hidden">
              <Image
                src={data.imageUrl}
                alt={data.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover"
              />
            </div>

            <div className="mt-3">
              <p className="text-[10px] text-[#e66b39]">
                {data.category} · {data.location}
              </p>

              <h1 className="text-2xl font-bold tracking-tight">
                {data.title}
              </h1>

              <p className="mt-2 text-xs leading-5 text-gray-600">
                {data.overview}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-5">
              <h2 className="mb-2 text-sm font-semibold">Amenities</h2>

              <div className="flex flex-wrap gap-2">
                {amenities.map((item, index) => (
                  <span
                    key={index}
                    className="border border-[#dedbd3] px-2 py-1 text-[10px] text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[10px] text-gray-600">
              Max capacity: {data.maxCapacity} people · Security deposit: $
              {data.deposit}
            </p>

            <p className="mt-2 text-[10px] text-gray-500">
              Hosted by {data.hostName}
            </p>
          </section>

          {/* Booking Card */}
          <BookingCard data={data}/>
        </div>
      </div>
    </main>
  );
};

export default StudioDetailsPage;
