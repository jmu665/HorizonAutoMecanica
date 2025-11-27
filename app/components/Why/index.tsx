import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Calidad",
    subheading:
      "En nuestro taller, la calidad no es un detalle: es el estándar.",
  },
  {
    heading: "Comunicacion",
    subheading:
      "Te mantenemos informado en cada paso, explicamos todo con claridad.",
  },
  {
    heading: "Fiabilidad",
    subheading:
      "Cada reparación que hacemos está pensada para durar.",
  },
  {
    heading: "Servicio a domicilio",
    subheading:
      "Recoleccion y entrega de vehiculo",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="">
            <Image
              src={getImagePath("/assets/why/Poster.png")}
              alt="iPad-image"
              width={600}
              height={300}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              ¿Porque somos la mejor opcion?
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              En nuestro taller mecánico combinamos experiencia, 
              tecnología y un trato honesto para ofrecer un servicio que simplemente no tiene comparación. Cada vehículo que recibimos es tratado como si fuera propio, con diagnósticos precisos, 
              reparaciones responsables y un compromiso absoluto con la seguridad y el rendimiento de tu automóvil.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src={getImagePath("/assets/why/check.svg")}
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
