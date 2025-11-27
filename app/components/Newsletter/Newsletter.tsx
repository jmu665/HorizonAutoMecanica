import Image from "next/image"; // Se mantiene la importación de Image, aunque no se usa, por si se vuelve a añadir contenido.
import { getImagePath } from "../../../lib/utils"; // Se mantiene la importación, por la misma razón.

const Newsletter = () => {
  return (
    <div className="relative z-10 my-20 px-4">
      <div className="mx-auto max-w-2xl lg:max-w-7xl rounded-3xl overflow-hidden">
        {/* Todo el contenido (imágenes, texto y botón) ha sido eliminado.
            Este div ahora está vacío, solo manteniendo las clases de diseño de Tailwind.
        */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* Aquí es donde estaban COLUMN-1 (Imágenes) y COLUMN-2 (Texto y Botón) */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;