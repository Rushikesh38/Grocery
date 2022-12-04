import recipedata from "../../developer/recipe.json"

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
        <div class="container">
        <div class="row">
          <div
            class="col-lg-10 offset-lg-1 h-100 d-flex align-items-center justify-content-center"
          >
            <div class="bg-white shadow rounded">
              <div class="row">
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
                  <div
                    class="h-100 bg-danger text-white text-center pt-5"
                  >
                    Image here!
                    <h2 class="fs-1">img</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Recipe;
  