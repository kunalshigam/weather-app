import React from 'react'
import CityBar from './Components/CityBar'
import Inputs from './Components/Inputs'

function WebPage() {
    return (
        <div>
            <div className='container card-container shadow'>
                <div className="row justify-content-center">
                    <div className=" col-lg-10 col-md-10 col-sm-6 mx-auto">
                        <div className='d-flex flex-column justify-content-center text-center  pb-5'>
                            <h1>Weather Forecast DashBoard</h1>
                            <CityBar />
                            <Inputs/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebPage