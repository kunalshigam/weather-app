import React from 'react'
import { formatToLocalTime } from '../Services/WeatherServices';

function LocationAndTime(weather) {
    const { weather:{dt, timezone, name, country }} = weather;
    console.log(weather.weather.dt, 'weatherlocation')
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center my-3 sizeText'>
                <p>{formatToLocalTime(dt, timezone)}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center my-2 sizeText'>
                <h3>{name}, {country}</h3>
            </div>
        </div>
    )
}

export default LocationAndTime