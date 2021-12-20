import React, { useState } from 'react'
import {  Link } from 'react-router-dom';
import Cards from '../../components/cards'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './home.css'

export default function Home(props) {

    const [productList, setProductList] = useState(props.productsList);
    const [loading] = useState('')
    const [filterData, setFilerData] = useState('')



const Filtered=()=>{

      if (filterData !== "all" ) {
            setProductList(productList.filter(v =>{
               
                 return v.product_type === filterData}))
           
                
        } else if (filterData === "all") {
            setProductList(props.productsList)
        }

}
    const FilteredBrand = async() => {

        const resp= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${filterData}`);
        const data = await resp.json();
        setProductList(data);
       
    };

    return (
         <>
       {loading !==null? 
       <>
            <Navbar></Navbar>

            <div className="filter-container">
            <h3>brand</h3>
                <div className="select-container">
             
                    <select name="filter" onChange={e => setFilerData(e.target.value)}>
                    
                        <option value="almay">Almay</option>
                        <option value="alva">Alva</option>
                        <option value="anna sui">Anna sui</option>
                        <option value="annabelle">Annabelle</option>
                        <option value="benefit">Benefit</option>
                        <option value="boosh">Boosh</option>
                        <option value="colourpop">colourpop</option>
                        <option value="deciem">deciem</option>
                        <option value="zorah biocosmetiques">zorah biocosmetiques</option>
                        <option value="w3llpeople">w3llpeople</option>
                        <option value="sally b's skin yummies">sally b's skin yummies</option>
                        <option value="rejuva minerals"> rejuva minerals</option>
                        <option value="marienatie">marienatie</option>
                        <option value="lotus cosmetics usa">lotus cosmetics usa</option>
                        <option value="c'est moi">c'est moi</option>
                        <option value="nyx">nyx</option>
                     
                    </select>
                    <button onClick={()=>{
                   FilteredBrand()
                    }}>search</button>
                    
                </div>

                <h3>Product Type</h3>
                <div className="select-container">

            
                    <select name="filter" onChange={e => setFilerData(e.target.value)}>
                        <option value="all">All</option>
                        <option value="blush">Blush</option>
                        <option value="bronzer">Bronzer</option>
                        <option value="eyeliner">Eyeliner</option>
                        <option value="eyebrow">Eyebrown</option>
                        <option value="eyeshadow">Eyeshadow</option>
                        <option value="foundation">Foundation</option>
                        <option value="lip_liner">lip liner</option>
                        <option value="lipstick">lipstick</option>
                        <option value="mascara">mascara</option>
                        <option value="nail_polish">Nail Polish</option>
                    </select>
                    <button onClick={() => Filtered()}>search</button>
                </div>


            </div>
            

            <div className="cards">
                {productList?.map(v => {

                    return  <Link  key={v.id} to={`/details/${v.id}`} state={v}>
                    <Cards
                       
                        brand={v.brand}
                        name={v.name}
                        img={v.image_link}
                        category={v.category}
                        price={v.price}
                        price_sign={v.price_sign}
                    ></Cards>
                    </Link>
                   
                }
                )}

            </div>

            <Footer></Footer>
            </>
       :
    
        <>

        <div className="spinner">
          <span className="spinner-inner-1"></span>
          <span className="spinner-inner-2"></span>
          <span className="spinner-inner-3"></span>
        </div>

      </>
    
    
    
    }
     </>





    )
}
