import React from 'react'

import './card.css'

function Cards(props) {
    return (
        <div className="container">

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
          
        </div>
    )
}

export default Cards
