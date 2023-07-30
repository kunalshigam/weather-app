import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../Services/WeatherServices'

function TemperatureDetails(weather) {

    const { weather: { deg, details, feels_like, humidity, icon, speed, sunrise, sunset, temp, temp_max, temp_min, timezone } } = weather;
    
    return (
        <>
            <div className='my-2'>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='text-white'>{details}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <figure>
                        <img src={iconUrlFromCode(icon)} alt={icon} width="100%" height="100%" />
                    </figure>
                    <h1 className='display-1'>{temp.toFixed(0)}°</h1>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                            </svg>
                            <span className='ms-3 d-none d-md-block sizeText '>Temperature:-</span> 
                            <span className='mx-1 ms-3 my-2'>{feels_like.toFixed(0)}*</span>
                        </div>
                        <div className='d-flex justify-content-start align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                            </svg>
                            <span className='ms-3 d-none d-md-block sizeText'>Humidity:-</span>
                            <span className='mx-1 ms-3 my-2'>{humidity}%</span>
                        </div>
                        <div className='d-flex justify-content-start align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <span className='ms-3 d-none d-md-block sizeText'>Speed:-</span>
                            <span className='mx-1 ms-3 my-2'>{speed}km/h</span>
                        </div>
                        <div className='d-flex justify-content-start align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-signpost-split" viewBox="0 0 16 16">
                                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
                            </svg>
                            <span className='ms-3 d-none d-md-block sizeText'>Direction:-</span>
                            <span className='mx-1 ms-3 my-2'>{deg}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex justify-content-between align-items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-sunrise" viewBox="0 0 16 16">
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span className='ms-1 d-none d-md-block sizeText'>Sunrise:-</span>
                        <span className='mx-2'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                    </div>
                    <div className="vr mx-auto"></div>
                    <div className='d-flex justify-content-between align-items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-sunset" viewBox="0 0 16 16">
                            <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span className='ms-1 d-none d-md-block sizeText'>Sunset:-</span>
                        <span className='mx-2'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                    </div>
                    <div className="vr mx-auto"></div>
                    <div className='d-flex justify-content-between align-items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                        <span className='ms-1 d-none d-md-block sizeText'>Min Temp:-</span>
                        <span className='mx-2'>{temp_min.toFixed(0)}°</span>
                    </div>
                    <div className="vr mx-auto"></div>
                    <div className='d-flex justify-content-between align-items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                        <span className='ms-1 d-none d-md-block sizeText'>Max Temp:-</span> 
                        <span className='mx-2'>{temp_max.toFixed(0)}°</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TemperatureDetails