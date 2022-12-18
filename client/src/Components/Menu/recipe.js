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
      <div className="container recipebg">
      <div className="row deal-of-the-day">
          <div className="col">
              <h1 className="">Today's Recipe</h1>
              <p class="lead m-0">{recipedata.title}</p>
                      <p class="lead m-0">Items:</p>
                      {recipedata.recipe.map(data=>(
                        <p class="m-0">{data.item + " " + data.quantity}</p>
                        ))}
              <button
                  type="submit"
                  className="btn btn-success px-4 mb-3">
                  Buy Now
              </button>
          </div>

          <div className="col">
            <img className="img-fluid" src={recipedata.img} alt="Card image cap" />
          </div>
      </div>
  </div>
);
  }
  
  export default Recipe;
  