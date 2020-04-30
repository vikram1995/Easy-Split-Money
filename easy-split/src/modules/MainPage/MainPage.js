import React , {Component} from 'react';
import Dashboard  from "./dashboard";

class MainPage extends Component{
    render(){
        return(<div>
                    <Dashboard/>
                    <div className="jumbotron">
                        <h1 className="display-4"></h1>

                    </div>
                </div>
        
            )
    }
}

export default MainPage;