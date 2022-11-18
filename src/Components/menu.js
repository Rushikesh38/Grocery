// import Navbar from "./navbar";
import ourproducts from "./ourproducts"
import { useEffect, useState } from "react";
import * as api from "../../src/api"


function Menu() {

  // const [item,setItem] = useState({name: "",
  //       image: "",
  //       price: "",
  //       description: ""
  //   });

  const [item,setItem] = useState([]);

  useEffect(() => {
    try {           
      api.fetchItems()
      .then((res) => {
        setItem(res.data);        
        console.log("this is running twice coz of strictmode tag - so that comp can check for errors more accurately")        
    }); 
    } catch (error) {
        console.log(error.message);
    }
  
  }, []);

  useEffect(()=>{
    console.log(item);    
  }, [item])

  
  return (
    <>
      helo:    
      <ul>
      {item.map((item)=>{
        //console.log(item.name)
        return <li key={item.name}>{item.name}</li>
      })}
      </ul> 
    </>
  );
}

export default Menu;
