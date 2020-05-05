import React , {Component} from 'react';
import Dashboard  from "./mainContent";
import './mainPageStyle.css';

import Menu from './menu';
import Update from './update';
import MainContent from './mainContent';

class MainPage extends Component{


    

    render(){
        return(<div>
                     <div className="content-wrapper container-fluid">
            
                        <Menu/>
                        <MainContent/>
                        <Update/>

                        

                    
                     </div>
                </div>
        
            )
    }
}

export default MainPage;