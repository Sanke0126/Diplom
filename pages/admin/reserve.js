// import { useEffect, useState } from "react";

// const AdminReserve = () => {
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       try {
//         const res = await fetch("/api/reserve");
//         const data = await res.json();
//         if (data.success) {
//           setReservations(data.data);
//         } else {
//           console.error(data.error);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReservations();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto py-12">
//       <h1 className="text-2xl font-bold mb-6">Reservations</h1>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Name</th>
//             <th className="py-2 px-4 border">Email</th>
//             <th className="py-2 px-4 border">Phone</th>
//             <th className="py-2 px-4 border">Party Size</th>
//             <th className="py-2 px-4 border">Occasion</th>
//             <th className="py-2 px-4 border">Date</th>
//             <th className="py-2 px-4 border">Time</th>
//             <th className="py-2 px-4 border">Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.map((reservation) => (
//             <tr key={reservation._id}>
//               <td className="py-2 px-4 border">{reservation.name}</td>
//               <td className="py-2 px-4 border">{reservation.email}</td>
//               <td className="py-2 px-4 border">{reservation.phone}</td>
//               <td className="py-2 px-4 border">{reservation.partySize}</td>
//               <td className="py-2 px-4 border">{reservation.occasion}</td>
//               <td className="py-2 px-4 border">
//                 {new Date(reservation.date).toLocaleDateString()}
//               </td>
//               <td className="py-2 px-4 border">{reservation.time}</td>
//               <td className="py-2 px-4 border">{reservation.message}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminReserve;

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AdminReserve = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth");
    } else if (status === "authenticated") {
      const fetchReservations = async () => {
        try {
          const res = await fetch("/api/reserve");
          const data = await res.json();
          if (data.success) {
            setReservations(data.data);
          } else {
            console.error(data.error);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchReservations();
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="h-[70vh] w-full grid place-items-center">
        <h2 className="text-3xl text-stone-300 font-bold">Not authorized</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6">Reservations</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Party Size</th>
            <th className="py-2 px-4 border">Occasion</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Time</th>
            <th className="py-2 px-4 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td className="py-2 px-4 border">{reservation.name}</td>
              <td className="py-2 px-4 border">{reservation.email}</td>
              <td className="py-2 px-4 border">{reservation.phone}</td>
              <td className="py-2 px-4 border">{reservation.partySize}</td>
              <td className="py-2 px-4 border">{reservation.occasion}</td>
              <td className="py-2 px-4 border">
                {new Date(reservation.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border">{reservation.time}</td>
              <td className="py-2 px-4 border">{reservation.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReserve;
