import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import CityBar from './Components/CityBar';
import Inputs from './Components/Inputs';
import LocationAndTime from './Components/LocationAndTime';
import TemperatureDetails from './Components/TemperatureDetails';
import Forecast from './Components/Forecast';
import getWeatherData from './Services/WeatherServices';
import getFormattedWeatherData from './Services/WeatherServices';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        });
    };
    fetchWeatherData()
    backgroundColor()
  }, [query, units])

  console.log(weather, 'weather')

  const backgroundColor = () =>{
    if(!weather) return "card-container"

    const thresholdMetric = units === "metric" ? 20 : 60 ;
    // const thresholdImperial = units === "imperial" && 60;

    // if(weather?.temp <= thresholdImperial) return "card-container"
    if (weather?.temp <= thresholdMetric) return "card-container"

    return 'card-container_hot'
  }


  return (
    <div className="App">
      <div className={`container shadow ${backgroundColor()}`}>
        <div className="row justify-content-center align-items-center">
          <div className=" col-lg-10 col-md-10 col-sm-10 mx-auto">
            <div className='d-flex flex-column justify-content-center text-center py-3'>
              <h3 className='text-center pb-3'>WEATHER FORECAST DASHBOARD</h3>
              <CityBar setQuery={setQuery} query={query}/>
              <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
              {
                weather &&
                <>
                  <LocationAndTime weather={weather}/>
                  <TemperatureDetails  weather={weather} units={units}/>
                  <Forecast title={"HOURLY FORECAST"} weather={weather?.hourly} />
                  <Forecast title={"DAILY FORECAST"} weather={weather?.daily}/>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
