import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [soilMoisture, setSoilMoisture] = useState([]);
  const [precipitation, setPrecipitation] = useState([]);

  useEffect(() => {
    // Obtener datos de humedad del suelo (SMAP)
    axios.get('/api/soil_moisture')
      .then((res) => {
        setSoilMoisture(res.data);
      })
      .catch((err) => console.error(err));

    // Obtener datos de precipitación (IMERG)
    axios.get('/api/precipitation')
      .then((res) => {
        setPrecipitation(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcadores de Humedad del Suelo */}
      {soilMoisture.map((point, idx) => (
        <Marker key={idx} position={[point.latitude, point.longitude]}>
          <Popup>Humedad del Suelo: {point.value} %</Popup>
        </Marker>
      ))}
      {/* Marcadores de Precipitación */}
      {precipitation.map((point, idx) => (
        <Marker key={idx} position={[point.latitude, point.longitude]}>
          <Popup>Precipitación: {point.value} mm</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
