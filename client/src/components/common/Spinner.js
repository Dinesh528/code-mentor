import React from 'react';
import spinner from './spinner.gif'

function Spinner() {
    return (
        <div>
            <img 
            src={spinner} 
            alt="loading.."
            style={{ width:'100px',margin: 'auto', display:'block' }}
            ></img>
        </div>
    )
}

export default Spinner;