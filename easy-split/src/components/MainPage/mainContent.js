import React,{ Component} from "react";
import './mainPageStyle.css';
import Dashboard from './components/dashboard/dashboard';
import RecentActivity from './components/RecentActivity/recentActivity';
import Expences from './components/Expences/expenses';

class mainContent extends Component{

    addExpence(){
        console.log("button");
        
    }
   
    path = window.location.pathname

    pageToRender = {
         "/main-page/dashboard": <Dashboard add={this.addExpence.bind(this)}/>,
         "/main-page/recent-activity" : <RecentActivity />,
         "/main-page/expenses": <Expences/>
         
    }

    
    render(){
        return( 

            <div className="main-component">
                
                {this.pageToRender[this.path]}
            </div>

            
        
        
    )
    }
    
}

export default mainContent;