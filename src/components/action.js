import React from "react"

const Action=(props)=>(
    <div>
        <button className='big-button' onClick={props.makechoice} disabled={!props.hasoptions}>Click here to make a choice</button>
    </div>
)

export default Action