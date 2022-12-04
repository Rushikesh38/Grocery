// import Navbar from "./navbar";
// import Ourproducts from "./ourproducts"
import { useEffect, useState } from "react";
import * as api from "../../api"
import Timer from "./timer";
import Cards from "./cards";
import Recipe from "./recipe"
// import '../Css/menu.css'
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
          // console.log(item);
          // console.log("this is running twice coz of strictmode tag - so that comp can check for errors more accurately")
        });
    } catch (error) {
      console.log(error.message);
    }

  }, []);
  const [search, setSearch] = useState(" ");
  return (
    <>
      {<Recipe />}
      {<Timer />}



      <div className="container-text container">
        <h4>All the vegies you Need</h4>
      </div>
      <div className="search-container container">
        <div className="serach-bar">
          <input className="search-input" type="text" name="" id="" placeholder="search" onChange={(event) => { setSearch(event.target.value) }} />
        </div>
      </div>

      <div className="menu-container ">
        <div className="card-container container">
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
                  <Cards item={item} />
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Menu;
