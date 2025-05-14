import { useState } from "react";
import Alert from "./Alert";
import { set } from "zod";

interface Props {
    children: string;
    // you can assign color with only one of these 3 values 
    color?: 'primary' | 'secondary'| 'danger';
    onClick: ()=>void;
}

const Button = ( {children, color, onClick}: Props) => {
    const [alertVisible, setAlertVisible] = useState(false)
    return (
        <div>            
            <button 
                className={"btn btn-"+color} 
                onClick={()=>{
                    setAlertVisible(true)
                    onClick()
                }}
            > 
                {children} 
            </button>
            
            <div className="m-4"></div>
            {alertVisible && <Alert onClose={ ()=>setAlertVisible(false) }>My Alert</Alert>}
        </div>        
    )
}

export default Button