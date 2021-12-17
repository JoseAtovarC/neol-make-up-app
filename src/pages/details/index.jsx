import React from 'react'
import { useFetchDetails } from '../../hooks'
import Navbar from '../../components/navbar'
import './details.css'
import { useParams } from 'react-router'


function Details() {

    let paramsId = useParams();

    const { data } = useFetchDetails('http://makeup-api.herokuapp.com/api/v1/products.json?searchmakeupproducts', parseInt(paramsId.id));



    return (
        <>
            {data !== null ?
                <>
                    <Navbar></Navbar>
                    <div className="details-container">
                        <h1>{data[0].name}

                        </h1>
                    </div>

                    <div >
                        <div className="container">
                            <img src={data[0].image_link} alt="" />


                            <p>Brand: <span>{data[0].brand}</span></p>
                            <p>Price: <span>${data[0].price}</span></p>
                            <p>Description: <span> {data[0].description}</span>  </p>
                            <p>Tags:</p>
                            {data[0].tag_list.map(v => {
                                return <ul>
                                    <li>{v}</li>
                                </ul>
                            })}

                        </div>

                    </div>

                </>
                : <>
                    <Navbar></Navbar>
                    <div className="spinner">
                        <span className="spinner-inner-1"></span>
                        <span className="spinner-inner-2"></span>
                        <span className="spinner-inner-3"></span>
                    </div>
                </>}

        </>
    )
}

export default Details
