import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

// 1. Definimos la nueva estructura de datos para los servicios
interface ServiceType {
  imgSrc: string;
  title: string;
  description: string;
}

// 2. Creamos los datos de tus servicios (puedes editar los textos aquí)
const ServiceData: ServiceType[] = [
  {
    imgSrc:"/assets/buyers/motor.png", // Asegúrate de tener este icono o cambia la ruta
    title: "Mantenimiento Preventivo",
    description: "Cambio de aceite, filtros y revisión de niveles para alargar la vida de tu motor.",
  },
  {
    imgSrc: "/assets/buyers/frenos.png", // Icono de frenos
    title: "Frenos y Suspensión",
    description: "Reparación de balatas, discos y amortiguadores para tu seguridad total.",
  },
  {
    imgSrc: "/assets/buyers/bateria.png", // Icono de batería/eléctrico
    title: "Sistema Eléctrico",
    description: "Diagnóstico de batería, alternador, marcha y solución de fallas eléctricas.",
  },
  {
    imgSrc: "/assets/buyers/laptop.png", // Icono de computadora/scanner
    title: "Diagnóstico Computarizado",
    description: "Tecnología de punta para detectar fallas precisas en el sistema de tu auto.",
  },
];

const Services = () => {
  return (
    <div id="prueba1" className="bg-babyblue">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <br />
        <br />
        
        {/* Título de la sección */}
        <div className="text-center mb-14">
            <h3 className="text-4xl sm:text-6xl font-semibold text-midnightblue lh-81">
            Nuestros Servicios <br /> Expertos
            </h3>
            <p className="text-lg text-bluegrey mt-4">
            Todo lo que necesitas en mecánica general con garantía de calidad.
            </p>
        </div>

        {/* Grid de Servicios (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {ServiceData.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
                {/* Círculo para el icono (opcional, le da buen estilo) */}
                <div className="bg-lightblue/20 p-3 rounded-full">
                    <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    />
                </div>
                
                <h4 className="text-xl font-bold text-midnightblue">
                  {item.title}
                </h4>
              </div>
              
              <hr className="my-4 border-gray-200" />
              
              <p className="text-base font-normal text-bluegrey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;