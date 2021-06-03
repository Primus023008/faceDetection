import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="searchGroup1">
            <div >
                <p>Enter Image Link Below to Detect Faces</p>
            </div>
            <div className="searchGroup2">
                <input type='text' 
                value="Enter Image Link"
                className='input'/>
                <button className="searchButton">Detect!</button>
            </div>
        </div>
        
    )
}

export default ImageLinkForm
