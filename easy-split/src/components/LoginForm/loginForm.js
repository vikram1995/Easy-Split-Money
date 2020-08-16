import React,{Component} from 'react';
import ErrorMsg from '../errorMsg/errorMsg';
import data from '../test.json';


class loginForm extends Component{

    state = {
        username: "",
        password: "",
        errorDisp: false,
        login:false
        
    }
    
    handleChange(event){
        console.log("onChange trigger");
      this.setState({
          [event.target.id] : event.target.value
          
      })

    }

    
    

    onSubmitHandler(event){
        event.preventDefault();
        // data.push(JSON.stringify({
        //   name:"rahul",
        //   password: "123"  
        // }))
        // console.log(data);
        fetch('http://localhost:4000/login',{
                method: 'POST',
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } ,
                
                body: JSON.stringify(
                     {
                        username: this.state.username,
                        password: this.state.password
                    }
                )
            }).then(resp=> resp.json()).then(data=>{
                this.setState({login:data.login});
                console.log(data.login)
                if( this.state.login)
                {
                    console.log("login successful");
                    this.setState({
                        errorDisp: false
                    })
                    window.location.pathname = "/main-page/dashboard"   
                    
                }
        
                else{
                    console.log("login failed");
                    this.setState({
                        errorDisp: true
                    })
                }
                
            }
        
          );

        }
       
    render(){

        

        return(
            <div className="signUpForm">
                <h1>Sign In</h1>
                {this.state.errorDisp ? <ErrorMsg message={"wrong username or password"}/> : null}

                <form onSubmit={this.onSubmitHandler.bind(this)}>
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