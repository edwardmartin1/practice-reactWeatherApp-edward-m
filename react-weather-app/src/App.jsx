import { useState } from 'react'
import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'

function App() {

  const [city, setCity] = useState(null);
  const [currentPage, setCurrentPage] = useState("CityList");

  return (
    <div>
      <h1>React Weather App</h1>
      {currentPage === "CityList" 
        && <CityList city={city} setCity={setCity} setCurrentPage={setCurrentPage}/>}
      {currentPage === "CityForecast" 
        && <CityForecast city={city} setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;

