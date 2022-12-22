import { useEffect, useState } from "react";
import mldata from "../../developer/recommendation.json"
import '../Css/menucomponenets.css'
import * as api from "../../api"
import Cards from "./cards";

function Suggest({item}) {

  const [cartdata,setCartdata]=useState([]);
  const [suggest,setSuggest]=useState([]);

    useEffect (() => {
      // get the cart items      
      try{
        api.fetchCartItem().then((res)=>{
            const cartdata = res.data;
            setCartdata(cartdata);            
        });
    }catch(error){
        console.log(error.message);
    }
    
    },[])

    useEffect (() => {
      // store all names
      const items = cartdata.map((cartdata) => {
        return cartdata.name.toUpperCase()
      })
      
      // console.log(items)
      items.map((item) => {
        if(mldata[item])
        {
          for(let i=0;i<mldata[item].length;i++)
          {
            suggest.push(mldata[item][i])
            // setSuggest(suggest => [...suggest, "mldata[item][i]"])
            // console.log(mldata[item][i])
          }
        }
      })
  
      console.log(suggest)
      // remove duplicates from array
      const unique = [...new Set(suggest)];
      setSuggest(unique)
      console.log(unique)

      // get all the items from menu state and then filter the items with the unique array
      // const menuitems = item.map((item) => {
      //   return item.name.toUpperCase()
      // })
      // console.log(menuitems)
      const filtered = item.filter((item) => {        
        return unique.includes(item.name.toUpperCase())
      })
      console.log(filtered)
      setSuggest(filtered)    
      console.log(suggest)         

    } , [cartdata])

    return (
      <div className="container recipebg">
      <div className="deal-of-the-day">
      <p>Recommended for you:</p>
      <div className="card-container container">  
      {
        suggest.map((item) => {
          return(
            <div>
              <Cards item={item}/>
            </div>
          )
        })
      }   
      </div>
      </div>
      </div>
);
  }
  
  export default Suggest;
  