function Recipe() {

    const hello = () => {
        console.log("helo")
    }

    return (
        <>
        <div>
        <button onClick={hello} className="btn btn-primary">Submit</button>
        </div>
        </>
    );
  }
  
  export default Recipe;
  