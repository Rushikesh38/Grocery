// import Navbar from "./navbar";
import Ourproducts from "./ourproducts"
import { useEffect, useState } from "react";
import * as api from "../../api"
import { Timer } from "./timer";
import Cards from "./cards";

function Menu() {

  // const [item,setItem] = useState({name: "",
  //       image: "",
  //       price: "",
  //       description: ""
  //   });

  const [item, setItem] = useState([]);

  useEffect(() => {
    try {
      api.fetchAdminItems()
        .then((res) => {
          setItem(res.data);
          console.log("this is running twice coz of strictmode tag - so that comp can check for errors more accurately")
        });
    } catch (error) {
      console.log(error.message);
    }

  }, []);

  useEffect(() => {
    console.log(item);
  }, [item])


  return (
    <>
      <div>  </div>
      {<Timer />}

      <Cards/>
      {/* {<Ourproducts/>} */}
      {/* <ul>
        {item.map((item) => {
          return (
            <>
              <Cards item={item} />
            </>
          )
        })}
      </ul> */}
    </>
  );
}

export default Menu;
