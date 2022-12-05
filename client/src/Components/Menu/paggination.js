const paggination=({totalpost,postperpage})=>{
    const numbers =[];
    for(let i=1;i<=Math.ceil(totalpost/postperpage);i++){
        numbers.push(i);
    }   
    return(
        <>
            <ul>
                {
                     numbers.map((num)=>{
                        return<>
                            <li>
                                num
                            </li>
                        </>
                    })
                }
            </ul>
        </>
    )
}
export default paggination;
