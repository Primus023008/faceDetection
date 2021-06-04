import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonClick}) => {
    return (
        <div className="outer">
            
            <p>Enter Image Link Below to Detect Faces Now</p>

            <div className="inner">
                <input type='text' 
                className='input'
                onChange= {onInputChange}/>
                &emsp;
                <button className="searchButton" 
                onClick={onButtonClick}>Detect!</button>
            </div>
            
        </div>
        
    )
}

export default ImageLinkForm
