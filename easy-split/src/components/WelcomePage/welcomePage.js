import React,{Component} from "react";
import './welcomePageStyle.css';
import LoginForm from '../LoginForm/loginForm';
import SignUpForm from '../SignUpForm/signUpForm';
import HomePage from '../homePage/homepage';
import LogNav from '../Nav/lognav';
import MainPage from '../MainPage/MainPage';




class WelcomePage extends Component {
 

    path = window.location.pathname
    
   pageToRender = {
        "/": <HomePage />,
        "/login" : <LoginForm />,
        "/signUp" : <SignUpForm />,
        "/dashBoard": <MainPage/>
   }  
  


    render(){
      
        return(
            <div>
                <LogNav />
                {this.pageToRender[this.path]}
            </div>
            
        )
    }
} 



export default WelcomePage;