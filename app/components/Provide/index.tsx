import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../../lib/utils";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: getImagePath("assets/carousel/google.svg"),
    country: "",
    paragraph: "Expertos en el cuidado de tu vehiculo",
  },
  {
    imgSrc: getImagePath("/assets/carousel/mazda-2.svg"),
    country: "",
    paragraph: "Diagnóstico de Alta Precisión.",
  },
  {
    imgSrc: getImagePath("/assets/carousel/honda.svg"),
    country: "",
    paragraph: "Técnicos Certificados y en Continua Actualización.",
  },
  {
    imgSrc: getImagePath("/assets/carousel/toyota-7.svg"),
    country: "",
    paragraph: "Respaldamos Nuestra Calidad.",
  },
];

const Provide = () => {
  return (
    <div id="nosotros">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                ¡Trabajamos con las mejores marcas!
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Si manejas un Nissan, Toyota, Mazda o Honda, este es tu taller. 
                Nos especializamos en estas marcas, conocemos sus sistemas a detalle y sabemos exactamente cómo mantenerlas funcionando al 100%. 
                <br />
                Diagnósticos más rápidos, reparaciones más precisas y resultados que realmente se sienten en el desempeño de tu auto.
                <br />
                Confía tu vehículo a un equipo que domina las marcas japonesas y te ofrece servicio profesional, honesto y de alto nivel. Aquí tu auto queda en manos expertas.
              </h4>
              <Link
                href={"https://wa.me/526674695156"}
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
          <button
            className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-[#128C7E] focus:bg-[#128C7E]"
           >
            Contactanos{" "}
          </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
