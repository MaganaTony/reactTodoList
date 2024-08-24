import { useEffect } from "react"
import { useState } from "react"

export default function Button(props){

    const [isActive, setIsActive] = useState(false);

    return (
        <button
        onClick={()=> setIsActive(!isActive)}
        >
        {isActive ? props.text : "Click Me"}
        </button>
    )
}