import { Redirect } from "react-router-dom";

export default function RedirectToLadingPage(){
    return <Redirect to={{pathname:'/'}}/>
}