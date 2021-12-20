import React from 'react'
import { useFetchDetails } from '../../hooks'
import Navbar from '../../components/navbar'
import './details.css'
import { useLocation } from 'react-router-dom'


function Details() {
    const location = useLocation();
	console.log(location.state);

    return (
        <>
           
                
                    <Navbar></Navbar>
                    <div className="details-container">
                        <h1>{location.state.name}

                        </h1>
                    </div>

                    <div >
                        <div className="container">
                            <img src={location.state.image_link} alt="" />


                            <p>Brand: <span>{location.state.brand}</span></p>
                            <p>Price: <span>${location.state.price}</span></p>
                            <p>Description: <span> {location.state.description}</span>  </p>
                            <p>Tags:</p>
                            {location.state.tag_list.map(v => {
                                return <ul>
                                    <li>{v}</li>
                                </ul>
                            })}

                        </div>

                    </div>

                
             

        </>
    )
}

export default Details
