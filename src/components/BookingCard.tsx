
"use client";

import { Studio } from "@/types";
import React from "react";
import { toast } from "sonner";

const BookingCard = ({ data }: { data: Studio }) => {
  const bookingHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const bookingData = Object.fromEntries(formData.entries());

    const booking = {
      ...bookingData,
      studioId: data._id,
      hostName: data.hostName,
      hostEmail: data.hostEmail,
      hourlyRate: data.hourlyRate,
    };

    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/studios/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      const responseData = await result.json();

      if (!result.ok || !responseData.acknowledged) {
        toast.error(responseData.message || "Booking failed");
        return;
      }

      toast.success("Booked Successfully!");
      form.reset();
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <aside className="border border-[#dedbd3] bg-white p-3">
      <div className="mb-3">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-medium">
            ${data.hourlyRate}
          </span>
          <span className="text-[10px] text-gray-500">/ hour</span>
        </div>
      </div>

      <form onSubmit={bookingHandler} className="space-y-2">
        <div>
          <label className="mb-1 block text-[10px]">Date</label>
          <input
            type="date"
            name="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-[#dedbd3] bg-[#faf9f6] px-2 py-1.5 text-[10px] outline-none focus:border-[#e66b39]"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="mb-1 block text-[10px]">Start</label>
            <input
              type="time"
              name="startTime"
              defaultValue="10:00"
              required
              className="w-full border border-[#dedbd3] bg-[#faf9f6] px-2 py-1.5 text-[10px] outline-none focus:border-[#e66b39]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px]">End</label>
            <input
              type="time"
              name="endTime"
              defaultValue="12:00"
              required
              className="w-full border border-[#dedbd3] bg-[#faf9f6] px-2 py-1.5 text-[10px] outline-none focus:border-[#e66b39]"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[10px]">Your name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-[#dedbd3] bg-[#faf9f6] px-2 py-1.5 text-xs outline-none focus:border-[#e66b39]"
          />
        </div>

        <div>
          <label className="mb-1 block text-[10px]">Your email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-[#dedbd3] bg-[#faf9f6] px-2 py-1.5 text-xs outline-none focus:border-[#e66b39]"
          />
        </div>

        <p className="pt-1 text-[10px] text-gray-600">
          Booking price:{" "}
          <span className="font-semibold text-black">
            ${data.hourlyRate}/hour
          </span>
        </p>

        <button
          type="submit"
          className="w-full bg-[#e96935] py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#d95625]"
        >
          Book workspace now
        </button>
      </form>
    </aside>
  );
};

export default BookingCard;
