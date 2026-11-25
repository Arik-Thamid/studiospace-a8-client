'use client'
import React from 'react';
import { toast } from 'sonner';


const StudioForm = () => {

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const studioData = Object.fromEntries(formData.entries())
        
        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/studios`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studioData)
        })
        const data = await result.json()
        console.log(data)
        if(data.acknowledged){
            toast.success('Added Successful')
        }
    }

    return (
         
<main className="min-h-screen px-4 py-8">
  <div className="mx-auto max-w-2xl">

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Studio Title */}
      <div>
        <label className="mb-1 block text-sm text-gray-700">
          Studio title
        </label>
        <input
          type="text"
          name="title"
          className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="mb-1 block text-sm text-gray-700">
          Category
        </label>
        <select
          name="category"
          className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
        >
          <option>Photo Studio</option>
          <option>Video Studio</option>
          <option>Music Studio</option>
          <option>Podcast Studio</option>
          <option>Dance Studio</option>
          <option>Other</option>
        </select>
      </div>

      {/* Pricing and Capacity */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm text-gray-700">
            Hourly rate ($)
          </label>
          <input
            type="number"
            name="hourlyRate"
            className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-700">
            Deposit ($)
          </label>
          <input
            type="number"
            name="deposit"
            className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-700">
            Max capacity
          </label>
          <input
            type="number"
            name="maxCapacity"
            className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="mb-1 block text-sm text-gray-700">
          Location
        </label>
        <input
          type="text"
          name="location"
          className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="mb-1 block text-sm text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          name="imageUrl"
          className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
        />
      </div>

      {/* Amenities */}
      <div>
        <label className="mb-2 block text-sm text-gray-700">
          Amenities
        </label>

        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-800">
          {[
            "Wi-Fi",
            "Natural light",
            "Parking",
            "Air conditioning",
            "Backdrops",
            "Lighting kit",
            "Sound treatment",
            "Changing room",
          ].map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input
                type="checkbox"
                name="amenities"
                value={item}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div>
        <label className="mb-1 block text-sm text-gray-700">
          Overview
        </label>
        <textarea
          name="overview"
          rows={4}
          className="w-full resize-y border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
        />
      </div>

      {/* Host Information */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-gray-700">
            Host name
          </label>
          <input
            type="text"
            name="hostName"
            className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-700">
            Host email
          </label>
          <input
            type="email"
            name="hostEmail"
            className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#ed6933] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d95725]"
      >
        Add studio
      </button>
    </form>
  </div>
</main>

    );
};

export default StudioForm;