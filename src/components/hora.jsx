import horaBg from "./img/bg/hora.jpg";

export default function Hora() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Manaus",
  };
  const timeManaus = new Intl.DateTimeFormat("pt-BR", options).format(now);

  return (
    <div className="relative flex items-start justify-start w-20 h-20 sm:w-32 sm:h-[7.2rem] lg:w-36 lg:h-28 mb-5 ml-2">
      <img src={horaBg} alt="Hora" className="w-full h-full object-cover rounded-md" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold">
        {timeManaus} <br /> in Manaus - AM Brazil
      </div>
    </div>
  );
}
