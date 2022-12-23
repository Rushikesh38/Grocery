import { useEffect, useState } from "react";
import * as api from "../api"
import Cards from "./Menu/cards";
// TODO: img, price: quantity * price, remove button, a common but now button at top right

const Cart =()=>{

    const [cartdata,setCartdata]=useState([]);


    const BuyNowHandler=()=>{
        console.log("buy now clicked");
        api.deleteCartItem();
    }

    useEffect(()=>{
        try{
            api.fetchCartItem().then((res)=>{
                setCartdata(res.data);
                console.log(res.data);
            });
        }catch(error){
            console.log(error.message);
        }
        console.log("cart data in carts");
        console.log(cartdata);
    },[])

    return(
        <>
        {cartdata.length===0 && <h1 className="text-center">Continue Shopping with us!</h1>}
        <button onClick={BuyNowHandler} className="btn btn-primary m-3 float-end" >Buy Now</button>
        <div className="card-container container">
          {
            cartdata.map((cartdata) => {
              return (                
                  <Cards item={cartdata}/>                
              )
            })
          }
          </div>

        </>
    )
}

export default Cart;