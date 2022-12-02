function Recipe() {

    const hello = () => {
        console.log("helo")
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
  