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
    passwordMismatch: false
}

userDataBase = [];

onChangehandler(event)
{
    this.setState({
        [event.target.name] :event.target.value
    })
}

onSubmitHandler(event){
    event.preventDefault();
    if(this.state.password !== this.state.rePassword){
        this.setState({passwordMismatch:true,
                        password:"",
                        rePassword: ""});

    }

    else{
        
        this.setState({passwordMismatch:false});

        this.userDataBase.push({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            password:this.state.password,
            dateOfBirth:this.state.dateOfBirth,
            gender:this.state.gender
        });
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
        
        this.props.welcomePageState();
        alert("All saved successfully !")
    }

    


}
    render(){
        return(
            <div className="signUpForm">
    
                <div className="form-container">
                    <h1>Create a new account</h1>
                    <h4>It's quick and easy. </h4>
                    {this.state.passwordMismatch ? <ErrorMsg message={"Password dose not match re-enter password"}/> : null}
                    <form action="" method="" onSubmit={this.onSubmitHandler.bind(this)}>
                        <div className="form-group">
                            <div className="form-row" >
                                <div className="col-6">
                                        <input className="form-control" type="text" id="firstName" name="firstName" placeholder="First name " required="true" onChange={this.onChangehandler.bind(this)} value= {this.state.firstName}/>
                                </div>
    
                                <div className="col-6">
                                        <input className="form-control" type="text" id="lastName" name="lastName" placeholder="Last name " required="true" onChange={this.onChangehandler.bind(this)} value= {this.state.lastName} />
                                </div>
                            </div>
                            <br/>
                                <div className="form-row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id="userName" name="userName" required="true" placeholder="Mobile number or email address" onChange={this.onChangehandler.bind(this)} value= {this.state.userName}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-12">
                                        <input className="form-control" type="text" id="password" name="password" placeholder="New password" required="true" onChange={this.onChangehandler.bind(this)} value= {this.state.password} />
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
                                        <input className="form-control" type="date" id="dateOfBirth" name="dateOfBirth" placeholder="" required="true" onChange={this.onChangehandler.bind(this)} value= {this.state.dateOfBirth} />
                                    </div>
                                </div>
                                <br/>
                                <div className="form-row">
                                    <div className="col-6">
                                        <p>Gender</p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"  value="male" required/>
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