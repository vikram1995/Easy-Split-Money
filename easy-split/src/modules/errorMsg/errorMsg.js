import React from 'react';

const paraStyle ={
    color: "red"
}
const message = (props) =>{
    return(
        <div>
            <p style ={paraStyle}>{props.message}</p>
        </div>
    )
}
export default message;