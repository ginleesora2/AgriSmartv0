import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);

  useEffect(() => {
    // Obtener datos de humedad del suelo (SMAP)
    axios.get('/api/soil_moisture')
      .then((res) => setSoilMoisture(res.data))
      .catch((err) => console.error(err));

    // Obtener datos de precipitación (IMERG)
    axios.get('/api/precipitation')
      .then((res) => setPrecipitation(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <h2>Condiciones Climáticas y del Suelo</h2>

      {/* Visualización de los datos en tiempo real */}
      <div className="dashboard-data">
        <div className="data-box">
          <h3>Humedad del Suelo</h3>
          {soilMoisture ? (
            <p>{soilMoisture.value} %</p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        <div className="data-box">
          <h3>Precipitación</h3>
          {precipitation ? (
            <p>{precipitation.value} mm</p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
