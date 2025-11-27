import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              Encontraste el taller para resolver tus problemas <br /> Revisa nuestros servicios
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              ¡Dale a tu motor la vida que se merece! Somos el taller de mecánica que combina la precisión tecnológica con la experiencia artesanal. Desde diagnósticos avanzados hasta puestas a punto de alto rendimiento. Si buscas que tu vehículo se sienta y
               se comporte como nuevo (o mejor), has llegado al lugar correcto. Rendimiento superior, garantizado. <br /> 
            </p>
          </div>

          <div className="text-center mt-5">
           
          </div>
          
          {/* INICIO DE LA CARD */}
          {/* Añadimos overflow-hidden a la card */}
          <div className="mt-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 overflow-hidden"> 
            <Image
              src={getImagePath("/assets/banner/tallerFondo.JPG")}
              alt="banner-image"
              width={1200}
              height={598}
              className="rounded-lg object-cover w-full h-full" // Añadimos object-cover y aseguramos w/h-full
            />
          </div>
          {/* FIN DE LA CARD */}
          
        </div>
      </div>
    </main>
  );
};

export default Banner;