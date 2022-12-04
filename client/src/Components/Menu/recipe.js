import recipedata from "../../developer/recipe.json"

function Recipe() {

    const hello = () => {
        console.log(recipedata.title)
        recipedata.recipe.map(data=>(
            console.log(data.item + " " + data.quantity)
            // console.log()
        ))
    }

    return (
        <>
        <div>
        <button onClick={hello} className="btn btn-primary">Add recipe</button>
        </div>
        </>
    );
  }
  
  export default Recipe;
  