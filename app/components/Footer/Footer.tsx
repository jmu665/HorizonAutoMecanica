"use client";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../../lib/utils";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    link: ["Inicio", "Servicio", "Nosotros", "Contacto"],
  },
 
];

const contacto = () => {
  return (
    <div id= 'contacto' className="bg-darkblue -mt-40">
      <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Image
  src={getImagePath("/assets/logo/2LogoHorizon.png")}
  alt="logo"
  width={200} // Reemplaza 200 con el ancho real del logo en píxeles
  height={50} // Reemplaza 50 con la altura real del logo en píxeles
  className="pb-8"
/>
            <div className="flex gap-4">
            
              <Link
                href="https://wa.me/526674695156"
                className="footer-icons"
              >
                <Image
                  src={getImagePath("/assets/footer/whatsapp-3.svg")}
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://www.instagram.com/horizonautomecanica?igsh=MWlibnozM3A2aDh3OA=="
                className="footer-icons"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src={getImagePath("/assets/footer/instagram.svg")}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div
              key={product.id}
              className="group relative col-span-2 md:col-span-4 lg:col-span-2"
            >
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <Image
                src={getImagePath("/assets/footer/mask.svg")}
                alt="mask-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                Calle nicolas bravo entre rio elota 
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Image
                src={getImagePath("/assets/footer/telephone.svg")}
                alt="telephone-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                + 667 469 5156
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Image
                src={getImagePath("/assets/footer/email.svg")}
                alt="email-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                jmu664@gmail.com
              </h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            @2025 Horizon. All Rights Reserved by martin urias
            
          </h4>

          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="cursor-pointer"
              >
                Privacy policy
              </a>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="cursor-pointer"
              >
                Terms & conditions
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contacto;
