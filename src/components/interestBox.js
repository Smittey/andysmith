import React from 'react';
import { IconContext } from "react-icons";

const interestBox = ({
    icon,
    title,
    list,
    extra
}) => {
    return (
        
        <div className="box">
            <IconContext.Provider value={{ className: "icon"}}>
                {icon} <h2>{title}</h2>
            </IconContext.Provider>

            {list && (         
                <ul>
                    {list.map((item, i) => <li key={i}>{item}</li>)}
                    {extra}
                </ul>
            )}
            
        </div>
    )
}


export default interestBox;