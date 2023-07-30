import React from 'react'

function Forecast({title, weather}) {
    // const { title, temp, icon } = weather
    return (
        <div className='container mt-5'>
            <div className='row'>
                {/* <div className='d-flex justify-content-center align-items-start flex-column mt-3'> */}
                <h5 className='text-center'>{title}</h5>
                <hr className='w-100 mx-auto' />
                <div className='d-flex flex-row justify-content-center align-items-start'>
                    {
                        weather?.map((item, index) => (
                            <div className='d-flex flex-column justify-content-around" align-items-center col-lg-3 col-md-3 col-sm-3 mx-auto me-2 ms-2'>
                                <p>{item.title}</p>
                                <figure>
                                    <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} className="img-fluid" alt="img" />
                                </figure>
                                <p className='mt-2'>{item.temp.toFixed()}°</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Forecast