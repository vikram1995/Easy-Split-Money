import React,{Component} from 'react';
import  './signUpFormStyle.css';
import ErrorMsg from '../errorMsg/errorMsg';

class signUpForm extends Component {

state ={
    firstName:"",
    lastName:"",
    userName:"",
    password:"",
    rePassword:"",  
    dateOfBirth:"",
    gender:"",
    passwordMismatch: false,
    DisplaysignUpErrorMsg:false,
    signUpErrorMsg:null
}

userDataBase;

onChangehandler(event)
{
    this.setState({
        [event.target.name] :event.target.value
    })
}

onSubmitHandler(event){
    event.preventDefault();
    this.setState({DisplaysignUpErrorMsg:false})

    if(this.state.password !== this.state.rePassword){
        this.setState({passwordMismatch:true,
                        password:"",
                        rePassword: ""});

    }

    else{
        
        this.setState({passwordMismatch:false});

        this.userDataBase = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            password:this.state.password,
            dateOfBirth:this.state.dateOfBirth,
            gender:this.state.gender
        };
        console.log(this.userDataBase);
        this.setState({
            firstName:"",
            lastName:"",
            userName:"",
            password:"",
            rePassword:"",  
            dateOfBirth:"",
            gender:""
        });

        fetch('http://localhost:4000/signUp',{
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } ,
            
            body: JSON.stringify(
                 this.userDataBase
            )
        }).then(res=>res.json()).then(res=>{
            if(res.signUp === true){
                alert("sign Up sucessful !!")
                
                window.location.pathname = "/";
                this.setState({
                    DisplaysignUpErrorMsg:false
                })
            }
            else if(res.signUp === false){
                this.setState({
                    signUpErrorMsg: true,
                    DisplaysignUpErrorMsg:true
                })
            }
            else if(res.signUp === "user already present"){
                this.setState({
                    signUpErrorMsg: false,
                    DisplaysignUpErrorMsg:true
                })
            }
            
        })
        
      
    }

    


}
    render(){
        return(
            <div className="signUpForm">
    
                <div className="form-container">
                    <h1>Create a new account</h1>
                    <h4>It's quick and easy. </h4>
                    {this.state.DisplaysignUpErrorMsg ? this.state.signUpErrorMsg ? <ErrorMsg message={"error occour while sign up try again"}/>:<ErrorMsg message={"user already present try with different user name"}/>:null}
                    {this.state.passwordMismatch ? <ErrorMsg message={"Password dose not match re-enter password"}/> : null}
                    <form action="" method="" onSubmit={this.onSubmitHandler.bind(this)}>
                        <div className="form-group">
                            <div className="form-row" >
                                <div className="col-6">
                                        <input className="form-control" type="text" id="firstName" name="firstName" placeholder="First name " required={true} onChange={this.onChangehandler.bind(this)} value= {this.state.firstName}/>
                                </div>
    
                                <div className="col-6">
                                        <input className="form-control" type="text" id="lastName" name="lastName" placeholder="Last name " required={true} onChange={this.onChangehandler.bind(this)} value= {this.state.lastName} />
                                </div>
                            </div>
                            <br/>
                                <div className="form-row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id="userName" name="userName" required={true} placeholder="Mobile number or email address" onChange={this.onChangehandler.bind(this)} value= {this.state.userName}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id="password" name="password" placeholder="New password" required={true} onChange={this.onChangehandler.bind(this)} value= {this.state.password} />
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id="rePassword" name="rePassword" placeholder="re-type password" onChange={this.onChangehandler.bind(this)} value= {this.state.rePassword}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-6">
                                        <label htmlFor="date-of-birth">Date of Birth</label>
                                        <input className="form-control" type="date" id="dateOfBirth" name="dateOfBirth" placeholder="" required={true} onChange={this.onChangehandler.bind(this)} value= {this.state.dateOfBirth} />
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-6">
                                        <p>Gender</p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"  value="male" required={true}/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female"/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="other"/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Other</label>
                                        </div>
                                    </div>
                                </div>
                                
                                
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                
            </div>
            
        )
    }
   
}

export default signUpForm;