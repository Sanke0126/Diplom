import Image from "next/image";

import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="custom-container py-32 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
    >
      <div className="hidden lg:block w-full aspect-square mx-auto overflow-hidden rounded-[20px]">
        <Image
          src="/images/reservation/Reserve.jpg"
          alt="Reserve image of Linguine Restaurant"
          width={300}
          height={400}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="-translate-y-16"
        />
      </div>
      <div className="bg-white">
        <h2 className="font-bold text-4xl w-[80%] mb-4">Ширээ захиалах</h2>
        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation;
