const Paggination=({totalpost,postperpage,pagginate})=>{
    const numbers =[];
    for(let i=1;i<=Math.ceil(totalpost/postperpage);i++){
        numbers.push(i);
    }   
    console.log(numbers)
    return(
        <>
        <h1>Paggination</h1>
            <ul>
                {
                     numbers.map((num)=>{
                        return<>
                            <li>
                                <button onClick={()=>pagginate(num)}>{num}</button>
                               
                            </li>
                        </>
                    })
                }
            </ul>
        </>
    )
}
export default Paggination;
