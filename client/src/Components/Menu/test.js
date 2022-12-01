
// import Navbar from "./navbar";
import Cards from "./ourproducts"
import { useEffect, useState } from "react";
// import Cards from "./cardProducts";
import * as api from "../../src/api"


function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      api.fetchItems()
        .then((res) => {
          const itemdata = res.data;
          setItems(itemdata);
          // console.log(items);

        });
    } catch (error) {
      console.log(error.message);
    }

  }, []);
  return (
    <>
      <div>
        {
          items.map((item)=>{
            return(<>
              <Cards item={item}/>

            </>)
          })
        }
        {/* <Cards item={items}/> */}
        {/* {
          items.map((item)=>{
            return <>
              <Cards item={item}/>
            </>
          })
        } */}
      </div>
    </>
  )
}

export default Menu;



























// function menu({ item }) {
//     const { name, image, price, description } = item;
//     return (
//       <div className="container">
//         <div class="container d-flex align-items-center">
//           <div className="card" style={{ width: "18rem" }}>
//             <h5 className="card-title card-body">{name}</h5>
//             <img className="card-img-top" src="MernProject.png" alt="Card image cap" />
//             <div className="card-body">
//               <p className="card-text">{description}</p>
//               <p className="card-text">Price:{price} </p>
//               <a href="#" class="btn btn-primary">Buy Now</a>
//             </div>
//           </div>
//         </div>
//       </div>
  
//     );
//   }
  
//   export default menu;
  