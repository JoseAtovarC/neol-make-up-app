import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

function Cards(props) {
    return (
        <div className="container">
            <Link to={`/details/${props.id}`}>
                <div>

                    <img src={props?.img} alt="img of a product" />
                    <p>
                        {props.brand}
                    </p>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        <b>Category: </b>
                        {props.category}
                    </p>
                    <p>
                        {props.price} {props.price_sign}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Cards
