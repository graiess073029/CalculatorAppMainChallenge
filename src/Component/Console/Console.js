import { useEffect } from "react";
import { useState } from "react";
import './Console.css'

export function Console(props){
    let [text,setText] = useState(0)

    useEffect( () => setText(props.argText), [props.argText,text])

    return <div className={`console ${props.className}`}> <h1>{text}</h1 ></div>
}

