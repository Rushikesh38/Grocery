import Amount from './inc_dec';
import * as api from '../../api';
import { useState } from 'react';
function Cards({item}) {
    const { name, image, price, description } = item;

    function handlecartclick() {
      console.log("add to cart clicked");
      const cartitem={
        name:item.name,
        price:item.price,
        quantity:1
      }
      console.log(cartitem)
      try{
        api.addCartItem(cartitem);
      }catch(error){
        console.log(error.message);
      }
      console.log(cartitem);
    }

    return (
        <>       
         <div className="">
           <div className="card" style={{ width: "18rem" }}>
             <h5 className="card-title card-body">{name}</h5>
             <img className="img-fluid card-img-top" src={image} alt="Card image cap" />
             <div className="card-body">
               <p className="card-text">{description}</p>
               <p className="card-text">Price:{price} </p>
               <Amount />
               {/* <button className="btn btn-primary">Buy Now</button> */}
               <button className="btn btn-primary" onClick={handlecartclick} >Add to cart</button>
             </div>
          </div>
        </div>

        </>
    )
}
export default Cards;

