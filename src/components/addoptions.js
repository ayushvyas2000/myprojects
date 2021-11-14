import React from "react";

export default class AddOptions extends React.Component{
    state={
        error: undefined
    }
    handleaddOption=(e)=>{
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.addOption(option);
        this.setState(()=>({
            error
        }))
        if(!error){
            e.target.elements.option.value=''            
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form className='addoption' onSubmit={this.handleaddOption}>
                    <input className='addoption__input' type="text" name="option"/>
                    <button className='button button-add'>Add Option</button>
                </form>
            </div>
        )
    }
}