import React from "react";

const Option=(props)=>(
    <div className='option'> 
        <p className='option__text'>{props.index+1}. {props.optiontext}</p>
        <button className='button' onClick={()=>{props.removesingle(props.optiontext)}} >remove</button>
    </div>
)

export default Option