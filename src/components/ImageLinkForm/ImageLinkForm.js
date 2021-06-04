import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="outer">
            
            <p>Enter Image Link Below to Detect Faces Now</p>

            <div className="inner">
                <input type='text' 
                placeholder="Enter Image Link"
                className='input'/>
                &emsp;
                <button className="searchButton">Detect!</button>
            </div>
            
        </div>
        
    )
}

export default ImageLinkForm
