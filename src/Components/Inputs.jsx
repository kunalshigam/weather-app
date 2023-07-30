import React from 'react'
import { useState } from 'react'

function Inputs({ setQuery, units, setUnits }) {

    const [city, setCity] = useState('')

    const handleClick = () => {
        if (city !== "") {
            setQuery({ q: city })
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat, lon
                });
            });
        }
    };

    const handleUnitChange = (e) => {
        const currentUnit = e.currentTarget.name
        if (currentUnit !== units) {
            setUnits(currentUnit)
        }
    }

    return (
        <div>
            <div className="container">
                <div className='d-flex flex-row justify-content-around my-2'>
                    <div className="row d-flex align-items-center  py-3 col-md-9">
                        <div className='col-md-9 col-sm-12 d-flex flex-row'>
                            <div className="form-group col-md-9 col-sm-8">
                                <input type="text" className="form-control shadow" placeholder="Search A City Here" value={city} onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className='col-md-3 col-sm-2 d-flex flex-row align-items-space-between mx-2'>
                                <div className='col-md-2 mx-2' onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div className='col-md-3 col-sm-3 mx-2 css' onClick={handleLocationClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            <div className='col-md-3 d-flex flex-row align-items-center justify-content-between mx-5 my-3'>
                                <div className='col-md-1'>
                                    <div className="bg-none border-none nav-link size">
                                        <a name="metric" onClick={handleUnitChange}>°C</a>
                                    </div>
                                </div>
                                <div className="vr ms-5 me-3 col-md-2" ></div>
                                <div className='col-md-3'>
                                    <div className="bg-none border-none nav-link size" >
                                        <a name="imperial" onClick={handleUnitChange}>°F</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Inputs