import React,{Component} from 'react';

import './App.css';
import './style/style.css';
import WelcomePage from './components/WelcomePage/welcomePage';


class App extends Component {

  render(){
    

    return (
      <div className="App">
        <WelcomePage />
        
      </div>
    );
  }

}



export default App;
