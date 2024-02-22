import { useState } from "react";
import Simple from "./Simple";
export default function ConditionalsIf(){

    function displayResult(){
        if(selectedRate==1){
            return <div>Noooo!!!!</div>
        }
        else if(selectedRate==2){
            return (
                <div>Please tell us how can we get better 
                <input type="text"/>
                </div>
            )
        }
        else if(selectedRate==3){
            return <Simple />
        }
        else {return (
            <div>
                Thanks for the feedback
            </div>
        )
        }
    }


    const[selectedRate,setSelectedRate]=useState(1);
    return (
        <>
        <h1>Conditionals If example</h1>
        <h2>Rate this website mate from 1-5</h2>
        <select onChange={(e)=>{
            console.log(e.currentTarget.value);
            setSelectedRate(parseInt(e.currentTarget.value,10))
        }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <div>
            {displayResult()}
        </div>
        </>
    )
}