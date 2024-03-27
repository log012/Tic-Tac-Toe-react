import React from 'react'

const Button = (props) => {
  return (
    <>
    <div className="button" style={{border:"1px solid ",height:"100px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"cyan"}} onClick={props.onClick}>
        <h5 style={{fontSize:"80px"}}>{props.value}</h5>
    </div>
    </>
  )
}

export default Button