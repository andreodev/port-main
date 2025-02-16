import horaBg from "./img/bg/hora.jpg";

export default function Hora() {
    const hora = new Date().getHours().toString().padStart(2, "0");
    const minutos = new Date().getMinutes().toString().padStart(2, "0");

    return (
        <div className='relative flex items-start justify-start w-20 h-20 sm:w-32 sm:h-[7.2rem] lg:w-36 lg:h-28 mb-5 ml-2'>
            <img src={horaBg} alt="Hora" className='w-full h-full object-cover rounded-md' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold'>
                {hora}:{minutos} <br /> in Manaus - AM Brazil
            </div>
        </div>
    );
}
