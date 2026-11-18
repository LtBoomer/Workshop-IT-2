import "./SignUp.css"
import InputObraznic from "./input/input.jsx"
import nameImage from "../../assets/fullNameIcon.png"
import phoneImage from "../../assets/phone (1).png"
import { useState } from "react"

export default function SignUpPage(){

    const [remembername, setRememberName] = useState()
    const [rememberPhon, setRememberPhon] = useState()

    return(
    <div className="signup-container">
        <div className="title-wrapper">
            <p>Pregatit sa devii influencer IT?</p>
        </div>
        <div className="inputs-wrapper">
            <InputObraznic text={'full name'} image={nameImage} setThing={setRememberName}/>
            <InputObraznic text={'phon numba'} image={phoneImage} setThing={setRememberPhon}/>
        </div>
        <div className="button-wrapper">
            <button
            onClick={()=>{
                console.log(remembername, ">>>>", rememberPhon)
            }}
            >
                Sign Up
            </button>
        </div>
    </div>
    )
}