// import Navbar from "./navbar";
// import Ourproducts from "./ourproducts"
import { useEffect, useState } from "react";
import * as api from "../../api"
import Timer from "./timer";
import Cards from "./cards";
import Recipe from "./recipe"
// import '../Css/menu.css';
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
          console.log(item);
          // console.log("this is running twice coz of strictmode tag - so that comp can check for errors more accurately")
        });
    } catch (error) {
      console.log(error.message);
    }

  }, []);

  // useEffect(() => {
  //   console.log(item);
  // }, [item])

  const [search, setSearch] = useState(" ");
  return (
    <>
      {<Recipe />}
      {<Timer />}

      <input type="text" name="" id="" placeholder="search" onChange={(event) => { setSearch(event.target.value) }} />
 
        
        {
          item.filter((val) => {
            if (search === " ") {
              return val
            }

            if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return val;
            }
          }).map((item) => {
            return (
              <>
                <div className="card-container">
                  <Cards item={item} />
                </div>
              </>
            )
          })
        }

        {/* {item.map((item) => {
          return (
            <>
              <Cards item={item} />
            </>
          )
        })} */}
 
    </>
  );
}

export default Menu;
