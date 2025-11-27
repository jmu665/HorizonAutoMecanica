/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. ELIMINAR O COMENTAR: La exportación estática no es necesaria en Netlify.
  // output: 'export', 
  
  // 2. ELIMINAR O COMENTAR: El Adaptador de Netlify maneja esto mejor sin 'basePath'.
  // basePath: isProd ? '/dSign' : '', 
  
  // 3. ELIMINAR O COMENTAR: El Adaptador de Netlify maneja esto mejor sin 'assetPrefix'.
  // assetPrefix: isProd ? '/dSign/' : '',
  
  // 4. Se mantiene trailingSlash si lo necesitas para la URL.
  trailingSlash: true, 

  // 5. Se mantiene unoptimized: true, aunque puedes intentar ponerlo en false si solo falla esto.
  images: {
    unoptimized: true, 
  },
}

module.exports = nextConfig