import  Button  from './Button'
import React, { useState } from 'react'

const Boards = () => {
    const[state,setState]=useState(Array(9).fill(null));
    const[isXturn,setIsXTurn] = useState(true);
  

    const checkWinner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of  winner){
            const [a,b,c]=logic;
            if(state[a]===state[b] && state[a]===state[c] && state[a]!==null){
                return state[a];
            }
           
        }
        return false;

    }
    const handleClick=(index)=>{
        if(state[index]!==null)return;
         const copyState=[...state];
         copyState[index]= isXturn ? "X" : "O";
         setState(copyState);
         setIsXTurn(!isXturn);
    }
    const isWinner=checkWinner();
    return (
      <>
           
    
            <div className='boards'>
                
            <h1 className='heading-game'>Tic Tac Toe</h1>
        {

             isWinner ? <>{isWinner} won the Game <button onClick={()=>setState(Array(9).fill(null))}>Play Again ?</button></>:
             <>
                <div className="row">
                    <Button onClick={()=>handleClick(0)} value={state[0]}/>
                    <Button onClick={()=>handleClick(1)} value={state[1]}/>
                    <Button onClick={()=>handleClick(2)} value={state[2]}/>
                </div>
                <div className="row">
                    <Button onClick={()=>handleClick(3)} value={state[3]}/> 
                     <Button onClick={()=>handleClick(4)} value={state[4]}/> 
                      <Button onClick={()=>handleClick(5)} value={state[5]}/>
                </div>
                <div className="row">
                <Button onClick={()=>handleClick(6)} value={state[6]}/>
                <Button onClick={()=>handleClick(7)} value={state[7]}/>
                <Button onClick={()=>handleClick(8)} value={state[8]}/>

                </div>
                </>
               }
            </div>
        </>
    )
}

export default Boards