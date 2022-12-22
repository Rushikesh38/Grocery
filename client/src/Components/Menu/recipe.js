import recipedata from "../../developer/recipe.json"
import '../Css/menucomponenets.css'
import * as api from '../../api/index.js'

function Recipe() {

    const hello = (e) => {
        e.preventDefault() 
        // console.log(recipedata.title)
        recipedata.recipe.map(data=>(
            api.addCartItem({name:data.name,quantity:data.quantity,price:data.price})
            // console.log(data.name + " " + data.quantity + " " + data.price)
            // console.log()
        ))
    }

    return (
      <div className="container recipebg mb-5">
      <div className="row recipe">
          <div className="col">
              <h1 className="">Today's Recipe</h1>
              <p class="lead m-0">{recipedata.title}</p>
                      <p class="lead m-0">Items:</p>
                      {recipedata.recipe.map(data=>(
                        <>
                        <p class="m-0">{data.name + " " + data.quantity}</p>
                        <p>Rs {data.price} each</p>
                        </>
                        ))}
              <button
                  type="submit"
                  className="btn btn-success px-4"
                  onClick={hello}
                  >
                  Add to cart
              </button>
          </div>

          <div className="col">
            <img className="img-fluid h-75" src={recipedata.img} alt="Card image cap" />
          </div>
      </div>
  </div>
);
  }
  
  export default Recipe;
  