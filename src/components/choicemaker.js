import React from "react";
import Header from "./header";
import AddOptions from "./addoptions";
import Options from "./options";
import Action from "./action";
import OptionModal from "./modal";
export default class ChoiceMaker extends React.Component{
    state={
        options:[],
        selected: undefined
    }
    addOption=(option)=>{
        if(!option){
            return 'Enter a valid option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Option already exists'
        }
        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }))
    }

    makechoice=()=>{
        const random=Math.floor(Math.random()*this.state.options.length)
        const selected=this.state.options[random];
        this.setState(()=>({selected}))
    }

    removeall=()=>{
        this.setState(()=>({options:[]}))
    }
    removesingle=(optiontoremove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>
            {
                return optiontoremove!==option
            }
            )
        }))
    }

    resetmodal=()=>{
        this.setState(()=>({selected: undefined}))
    }

componentDidMount(){
    try{
        const json=localStorage.getItem('options');
    const options=JSON.parse(json)
    if(options){
        this.setState(()=>({options}))
    }
    }
    catch(e){

    }
    
}
componentDidUpdate(prevProps,prevState){
    if(this.state.options.length!==prevState.options.length){
        const json=JSON.stringify(this.state.options)
        localStorage.setItem('options',json)
    }
}
    render(){
        return(
            <div className='container'>
            <Header />
            <Action makechoice={this.makechoice} hasoptions={this.state.options.length>1}/>
            <Options  hasoptions={this.state.options.length>0} removesingle={this.removesingle} removeall={this.removeall} options={this.state.options} />
            <AddOptions addOption={this.addOption}/>
            <OptionModal selected={this.state.selected} resetmodal={this.resetmodal} />
            </div>
        )
    }
}
