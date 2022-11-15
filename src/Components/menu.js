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
        const itemdata = res.data;
        setItem(itemdata);
        // setItem([...item, {name: itemdata.name, image: itemdata.image, price: itemdata.price, description: itemdata.description}]);
        console.log(itemdata);
        console.log(item)
    }); 
    } catch (error) {
        console.log(error.message);
    }
  
  }, []);

  
  return (
    <div>      
      {/* {item.map((item)=>{
        <div>
        <h1>{item.name}</h1>
        </div>
      })} */}
    </div>
  );
}

export default Menu;
