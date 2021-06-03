import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="outer">
            <div >
                <p>Enter Image Link Below to Detect Faces</p>
            </div>
            <div className="center">
                <div className="inner center">
                    <input type='text' 
                    placeholder="Enter Image Link"
                    className='input'/>
                    <button className="searchButton">Detect!</button>
                </div>

            </div>
        </div>
        
    )
}

export default ImageLinkForm
