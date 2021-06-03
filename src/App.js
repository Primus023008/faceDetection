import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render(){
    return (
      <div>
      <Navigation/>
      <ImageLinkForm/>
      {/* {<FaceDetection/>} */}
      </div>
    );
  }
  
}

export default App;
