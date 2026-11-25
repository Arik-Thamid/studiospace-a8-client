// The shapes of our data. A real backend would return the same shapes.
export type Category = "Photo Studio" | "Film Stage" | "Podcast Lounge" | "Music Suite" | "Workshop";
export type BookingStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export interface Studio {
  _id: string;
  title: string;
  category: Category;
  location: string;
  hourlyRate: number;
  deposit: number;
  maxCapacity: number;
  rating: number;
  imageUrl: string;
  amenities: string[];
  overview: string;
  hostName: string;
  hostEmail: string;
}

export interface Booking {
  id: string;
  studioId: string;
  date: string;      // "2026-12-05"
  startTime: string; // "10:00"
  endTime: string;   // "14:00"
  hours: number;
  hourlyRate: number;
  total: number;
  customerName: string;
  customerEmail: string;
  status: BookingStatus;
}


export interface User { name: string; email: string; photoUrl: string }
