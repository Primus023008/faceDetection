// import React, { Component } from "react";
// import Navigation from "./components/Navigation/Navigation";
// import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
// import FaceDetection from "./components/FaceDetection/FaceDetection";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: "",
//       img: null,
//     };
   
//   }

//   onInputChange = (event) => {
//     this.setState({ input: event.target.value });
//     console.log(event.target.value);
//   };

//   onButtonClick = () => {
//     Promise.all([
//       await faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//       await faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//       await faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//       await faceapi.nets.faceExpressionNet.loadFromUri("/models"),
//     ]).then()
      
  

//     faceapi.fetchImage(`${this.state.input}`)
//     .then(async (resp) => {
//       console.log(resp)
//       const detection = await faceapi
//         .detectAllFaces(resp, faceapi.TinyFaceDetectorOptions())
//         .withFaceLandmarks()
//         .withFaceExpressions();
//         console.log(detection)
//     })
//     .catch((err) => {
//       console.log(err)
//     })

    
    

//     // const detect = async function () {
//     //   const detection = await faceapi
//     //     .detectAllFaces(input, faceapi.TinyFaceDetectorOptions())
//     //     .withFaceLandmarks()
//     //     .withFaceExpressions();
//     //   console.log(detection);
//     // };

    

   

//     // this.setState({img: image})
//   };

//   render() {
//     return (
//       <div>
//         <Navigation />
//         <ImageLinkForm
//           onInputChange={this.onInputChange}
//           onButtonClick={this.onButtonClick}
//         />
//         <FaceDetection src={this.state.input} />
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react'
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "27e20407c7294e0499c09f783659c3a2",
});

class App extends Component{

  constructor(){
    super();
    this.state={
      input: "",
      imageURL: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonClick =() => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((resp) => {
      console.log(resp);
      console.log(
        resp.output[0].data.regions[0].region_info.bounding_box
      );
    })
    .catch(err => {
      
        console.log(err);
      
    })
  }
  
  render() {
    return (
      <div>
        <Navigation/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        <FaceDetection imageURL={this.imageURL}/>

      </div>
    )
  }
}

export default App;
