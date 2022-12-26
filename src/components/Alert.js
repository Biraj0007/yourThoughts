import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import { useState } from 'react';

export const Alert = (props) => {
    const context = useContext(noteContext);
    // const [d,dD] = useState()
    // if (alert1.message===undefined){
       
    // }
    // // const [s,sS]=useState('none')
    const { alert1 } = context;
    // console.log(alert1,"iiiiiiii");
    // sS(alert1.message)
    // const message = onAlert()
    return (
        <div>
            <div className=  {`alert alert-${alert1.colour} d-${alert1.display}` } role="alert">
                {alert1.msg}
            </div>
        </div>
    )
}