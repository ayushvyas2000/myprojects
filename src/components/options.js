import React from "react";
import Option from "./option"

const Options=(props)=>(
    <div className='widget'>
        <div className="widget__header">
        <p className='widget__headertext'>{props.hasoptions ? 'Options List' : 'Please Add Options'}</p>
        <button disabled={!props.hasoptions} className='button' onClick={props.removeall}>Remove all</button>
        </div>
        {
            props.options.map((option, index)=>
                <Option removesingle={props.removesingle} key={option} index={index} optiontext={option} />
            )
        }
    </div>
)

export default Options