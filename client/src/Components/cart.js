import { useEffect, useState } from "react";
import * as api from "../api"

const Cart =()=>{

    const [cartdata,setCartdata]=useState([]);

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
            <h1>Cart section</h1>
        </>
    )
}

export default Cart;