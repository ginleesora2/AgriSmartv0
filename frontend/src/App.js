import './App.css';
import MapComponent from './components/MapComponent';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Agricultural Dashboard</h1>
      </header>

      {/* Contenedor que agrupa el Panel y el Mapa */}
      <div className="dashboard-container">
        {/* Panel de Control con la información en tiempo real */}
        <Dashboard />

        {/* Mapa Interactivo */}
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;