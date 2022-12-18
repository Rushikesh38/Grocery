import recipedata from "../../developer/recipe.json"
import '../Css/menucomponenets.css'

function Recipe() {

    const hello = (e) => {
        e.preventDefault() 
        console.log(recipedata.title)
        recipedata.recipe.map(data=>(
            console.log(data.item + " " + data.quantity)
            // console.log()
        ))
    }

    return (
        <div class="container ">
        <div class="row ">
          <div
            class="col"
          >
            <div class="recipebg shadow rounded">
              <div class="row menu-based">
                <div class="col-md-7 pe-0">
                  {/* <!--left--> */}
                  <div class="h-100 py-4 px-5">
                    <form action="" class="row g-3">
                      <h3 class="m-0">Today's Recipe</h3>
                      <p class="lead m-0">{recipedata.title}</p>
                      <p class="lead m-0">Items:</p>
                      {recipedata.recipe.map(data=>(
                        <p class="m-0">{data.item + " " + data.quantity}</p>
                        ))}
                      <div class="container text-center">
                        <div class="m-2 d-flex justify-content-center">
                          {/* <!--TODO: put in centre--> */}
                          <button onClick={hello} className="btn btn-primary">Add To cart</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 ps-0 d-none d-md-block">
                  {/* <!--right--> */}
                    <img className="h-100 img-fluid card-img-top" src={recipedata.img} alt="Card image cap" />
                  </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Recipe;
  