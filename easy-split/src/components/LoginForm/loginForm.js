import React,{Component} from 'react';
import ErrorMsg from '../errorMsg/errorMsg';

class loginForm extends Component{

    state = {
        username: "",
        password: "",
        errorDisp: false
        
    }

    username = "vikram";
    password = "123";
    handleChange(event){
        
      this.setState({
          [event.target.id] : event.target.value
          
      })

    }
    onSubmitHandler(event){
        event.preventDefault();
        if(this.state.username === this.username && this.state.password === this.password.toString())
        {
            console.log("login successful");
            this.setState({
                errorDisp: false
            })
            window.location.pathname = "/dashBoard"
            
        }

        else{
            console.log("login failed");
            this.setState({
                errorDisp: true
            })
        }
        
    }

    render(){
        return(
            <div className="signUpForm">
                <h1>Sign In</h1>
                {this.state.errorDisp ? <ErrorMsg message={"wrong username or password"}/> : null}

                <form action="" method="" onSubmit={this.onSubmitHandler.bind(this)}>
                    <div className="form-group">
                        
                         
                            <div className="form-row">
                                <div className="col-12">
                                    <input className="form-control" type="text" id="username"  placeholder="Mobile number or email address"  value={this.state.username} onChange={this.handleChange.bind(this)}  />
                                </div>
                            </div>
                        <br/>
                            <div className="form-row">
                                <div className="col-12">
                                    <input className="form-control" type="text" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                                </div>
                            </div>
                            
                    </div>
               <button type="submit" className="btn btn-primary">Sign In</button>
             </form>
            </div>
            
        )
    }
    
}

export default loginForm;