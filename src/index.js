import React from "react";
import ReactDom from "react-dom";
import ChoiceMaker from "./components/choicemaker";
import 'normalize-css'
import './styles/styles.scss'
const App=()=>(
    <ChoiceMaker />
)

ReactDom.render(<App />,document.getElementById('root'))