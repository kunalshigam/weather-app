import React from 'react'

function CityBar({setQuery, query}) {

    console.log(query, 'query')

    const cities = [
        { id: "1", city: "MUMBAI" },
        { id: "2", city: "KOLKATA" },
        { id: "3", city: "BENGALURU" },
        { id: "4", city: "CHENNAI" },
        { id: "5", city: "DELHI" }
    ]
    return (
        <div className='d-flex align-items-center my-3'>
            {
                cities && cities?.map((item, index) => (
                    <div className="bg-none border-none mx-auto nav-link">
                        <a name="d-flex justify-content-center" key={index} value={item?.city} onClick={() =>setQuery({q:item?.city})} >{item?.city}</a>
                    </div>
                    // <a className='text-white mx-auto' key={index} value={item?.city} onClick={e => console.log(e.target.value)}>{item?.city}</a>
                ))
            }
        </div>
    //     <div className='d-flex align-items-space-between my-3 '>
    //     <nav className="navbar navbar-expand-lg navbar-none bg-none">
    //         <div className="container-fluid">
    //             <a className="navbar-brand text-white size" href="#">Locations</a>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                     {
    //                         cities && cities?.map((item, index) => (
    //                             <li className="nav-item d-flex justify-content-between align-items-around mx-5">
    //                                 <h4 className="nav-link active text-white py-5 size" aria-current="page" key={index} value={item.city}>{item.city}</h4>
    //                             </li>
    //                         ))
    //                     }
    //                 </ul>
    //                 {/* <form className="d-flex">
    //     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //     <button className="btn btn-outline-success" type="submit">Search</button>
    //   </form> */}
    //             </div>
    //         </div>
    //     </nav>
    //     </div>

    )
}

export default CityBar