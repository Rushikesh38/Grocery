import { useEffect, useState } from "react";
import mldata from "../../developer/recommendation.json"
import '../Css/menucomponenets.css'
import * as api from "../../api"
import Cards from "./cards";
import '../Css/suggest.css'
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

      const filtered = item.filter((item) => {        
        return unique.includes(item.name.toUpperCase())
      })
      console.log(filtered)
      setSuggest(filtered)    
      console.log(suggest)         

    } , [cartdata])

    return (
      <div className="container recipebg">
      <div className="deal-of-the-day recommendation">
      {
        item.length === 0 ? <h1>Keep Shopping with us!</h1> : <h3>Recommended for you:</h3>
      }
      {/* <h1>Recommended for you:</h1> */}
      <div className="card-container container recom-contiaer">  
      
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
  