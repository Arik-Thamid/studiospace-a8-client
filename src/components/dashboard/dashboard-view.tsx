
import Link from "next/link";


export default function DashboardView() {
 
 

  

  return (
    <>
      <h1 className="font-heading text-3xl font-bold">Welcome, Arik</h1>
      <p className="text-sm text-muted">arikthamid003@gmail.com</p>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {/* {stats.map(([label, value]) => <div key={label} className="border border-line bg-card p-4"><p className="font-heading text-3xl">{value}</p><p className="text-sm text-muted">{label}</p></div>)} */}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <Link href="/add-studio" className="bg-accent px-4 py-2 text-white">Add new studio</Link>
        <Link href="/my-listings" className="border border-line px-4 py-2">My listings</Link>
        <Link href="/my-bookings" className="border border-line px-4 py-2">My bookings</Link>
      </div>

      <h2 className="mt-10 font-heading text-xl font-semibold">Booking requests for your studios</h2>
      {/* {0 ? <p className="mt-2 text-sm text-muted">No requests yet.</p> 
    //   : (
    //     <ul className="mt-3 space-y-2">
    //       {requests.map((b) => (
    //         <li key={b.id} className="flex flex-wrap items-center gap-3 border border-line bg-card p-3 text-sm">
    //           <span className="min-w-0 flex-1">{b.customerName} ({b.customerEmail}) · {listings.find((s) => s.id === b.studioId)?.title} · {b.date} {b.startTime}-{b.endTime} · ${b.total}</span>
    //           <StatusBadge status={b.status} />
    //           {b.status === "Pending" && (<>
    //             <button onClick={() => change(b.id, "Confirmed")} className="bg-green-700 px-3 py-1 text-white">Confirm</button>
    //             <button onClick={() => change(b.id, "Cancelled")} className="border border-line px-3 py-1">Cancel</button>
    //           </>)}
    //         </li>
    //       ))}
    //     </ul>
    //   )
      } */}
      <h2 className="mt-10 font-heading text-xl font-semibold">Recent listings</h2>
      {/* <ul className="mt-2 text-sm">{listings.slice(0, 3).map((s) => <li key={s.id}>{s.title} · ${s.hourlyRate}/hr</li>)}</ul> */}
    </>
  );
}
