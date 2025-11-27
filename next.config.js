/** @type {import('next').NextConfig} */
const nextConfig = {
  // Asegúrate de que output: 'export' NO esté aquí
  trailingSlash: true,
  images: {
    unoptimized: true, // Puedes intentar ponerlo en false, si las dimensiones están bien
  },
}
module.exports = nextConfig