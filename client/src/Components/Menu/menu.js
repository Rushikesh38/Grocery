import { useEffect, useState } from "react";
import * as api from "../../api"
import Timer from "./timer";
import Cards from "./cards";
import Recipe from "./recipe"
import '../Css/menu.css'
import paggination from "./paggination";
function Menu() {
  const [item, setItem] = useState([]);
  const [postperpage,Setpostperpage] =useState(5)
  const [currentpage,Setcurrentpage] = useState(1)
  const indexoflastpost = currentpage*postperpage;
  const indexoffirstpost = indexoflastpost-postperpage;

  const currentpost=item.slice(indexoffirstpost,indexoflastpost);


  useEffect(() => {
    try {
      api.fetchAdminItems()
        .then((res) => {
          setItem(res.data);
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
            currentpost.filter((val) => {
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
        <paggination totalpost={item} postperpage={postperpage} />
      </div>
    </>
  );
}

export default Menu;
