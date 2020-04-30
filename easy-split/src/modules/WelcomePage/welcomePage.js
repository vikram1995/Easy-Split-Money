import React,{Component} from "react";
import './welcomePageStyle.css';
import LoginForm from '../LoginForm/loginForm';
import SignUpForm from '../SignUpForm/signUpForm';
import HomePage from '../homePage/homepage';
import LogNav from '../Nav/lognav';
import MainPage from '../MainPage/MainPage';


class WelcomePage extends Component {

    state = {
        homePage:true,
        registered : false,
        mainPage:false
    }

    

    onButtonClickHandler(event){
        let page = event.target.value;
        
        if(page === "signIn"){
            
            this.setState({
                homePage:false,
                registered:true
            })
        }

        else if(page === "signUp"){
            this.setState({
                homePage:false,
                registered:false
            })
        }
    }

    changeviewToHome(){
        this.setState({
            homePage: true
        })
        
    }

    switchSignInToSignUpview(){
        this.setState({
            homePage:false,
            registered:false
        })
    }

    switchSignUpToSignInview(){
        this.setState({
            homePage:false,
            registered:true
        })
    }

    mainPageviewHandler(){
        this.setState({
            mainPage: true
        })
    }

    render(){
        const log = this.state.registered ? <LoginForm welcomePageState={this.changeviewToHome.bind(this)} mainPageStatus={this.mainPageviewHandler.bind(this)}/>:<SignUpForm welcomePageState={this.changeviewToHome.bind(this)}/>;
        const home = <HomePage click = {this.onButtonClickHandler.bind(this)}/>;

        const initPage = <div><LogNav status={this.changeviewToHome.bind(this)} registered={this.state.registered} signInToUp={this.switchSignInToSignUpview.bind(this)} signUptoIn = {this.switchSignUpToSignInview.bind(this)}/>
        {this.state.homePage ? home : log}</div>

        

        return(
            <div>
                {this.state.mainPage ? <MainPage/> : initPage}
                
            </div>
            
        )
    }
} 



export default WelcomePage;