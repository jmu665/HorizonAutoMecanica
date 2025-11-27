"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

// 1. Configuración del Mapa (Estilos y Coordenadas)
const containerStyle = {
  width: "100%",
  height: "100%", // Ajustado para llenar el contenedor padre
  minHeight: "400px",
  borderRadius: "1rem",
};

const center = {
  lat: 24.794315,
  lng: -107.400816,
};

const Contact = () => {
  // 2. Cargar la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAQmTySqHwjcOzAZHcuB0bMDaDp6-O9uHs'
  });

  const [map, setMap] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  // Lógica para el botón de WhatsApp
  const phoneNumber = "526674695156"; // Código de país (52) + Lada (667) + Número
  const message = "Hola Horizon, me gustaría agendar una cita o pedir informes sobre mi auto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div id="contact" className="bg-white">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <div className="text-center mb-12">
          <h3 className="text-4xl sm:text-6xl font-semibold text-midnightblue lh-81">
            Contáctanos
          </h3>
          <p className="text-lg text-bluegrey mt-4">
            Visítanos o agenda tu cita. Estamos listos para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* COLUMNA IZQUIERDA: Información de Texto y Botón */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="bg-babyblue/30 p-8 rounded-2xl shadow-sm">
              <h4 className="text-2xl font-bold text-midnightblue mb-4">Ubicación del Taller</h4>
              <p className="text-bluegrey text-lg mb-4">
                Calle Rio elota #595, Colonia Guadalupe <br />
                Culiacan, Sinaloa, México.
              </p>
              
              <h4 className="text-2xl font-bold text-midnightblue mb-2">Horario</h4>
              <p className="text-bluegrey text-lg mb-4">
                Lunes a Viernes: 8:00 AM - 6:00 PM <br />
                Sábados: 8:00 AM - 4:00 PM
              </p>

              <h4 className="text-2xl font-bold text-midnightblue mb-2">Teléfono</h4>
              <p className="text-bluegrey text-lg mb-6">
                (667) 469-5156
              </p>

              {/* BOTÓN DE WHATSAPP */}
              <a 
                href={"https://wa.me/526674695156"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {/* Icono SVG de WhatsApp */}
                <svg 
                  className="w-6 h-6 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar por WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Mapa de Google */}
          <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full min-h-[400px]">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    disableDefaultUI: false,
                    zoomControl: true,
                }}
              >
                <Marker
                  position={center}
                  onClick={handleMarkerClick}
                >
                  {infoWindowOpen && (
                    <InfoWindow
                      onCloseClick={handleInfoWindowClose}
                      position={center}
                    >
                      <div className="p-2 text-black">
                        <h5 className="font-bold text-sm">Horizon Auto Mecánica</h5>
                        <p className="text-xs mt-1">¡Expertos en tu camino!</p>
                        <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-xs underline mt-2 block"
                        >
                            Cómo llegar
                        </a>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              </GoogleMap>
            ) : (
              <div className="flex items-center justify-center h-[400px] bg-gray-100 text-gray-500">
                Cargando mapa...
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;