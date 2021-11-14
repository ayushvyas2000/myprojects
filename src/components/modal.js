import React from "react";
import ReactModal from "react-modal";

const OptionModal=(props)=>(
    <ReactModal
        isOpen={!!props.selected}
        contentLabel="selected option"
        onRequestClose={props.resetmodal}
        closeTimeoutMS={700}
        className='modal'
        >
        <h1>The Choice is: </h1>
        <p className='option__text'>{props.selected}</p>
        <button className='button' onClick={props.resetmodal}>Okay</button>
    </ReactModal>
)

export default OptionModal