import React,{Component} from 'react';
import AddFriends from './components/AddFriends/AddFriends';

class menu extends Component {

state = {
    friends:[],
    groups:[],
    addFriend:false,
    stateChange:false
}

     handleAddfriendShow = () => this.setState({addFriend: true});
     handleAddfriendClose = () => this.setState({addFriend: false});

     changeState(){
         let stateChange = !this.state.stateChange
         this.setState({stateChange: stateChange});
         alert("state is changed");
     }

     componentDidUpdate(prevProps,prevState){
        
         if(prevState.stateChange !== this.state.stateChange){
            
            fetch('http://localhost:4000/groups').then(resp=> resp.json())
            .then(data=>{
                
                this.setState({groups:data})
                
            });
            fetch('http://localhost:4000/friends').then(resp=> resp.json())
            .then(data=>{
                
                this.setState({friends:data})
                
            });   
         }
     }

     componentDidMount(){
        fetch('http://localhost:4000/groups').then(resp=> resp.json())
        .then(data=>{
            
            this.setState({groups:data})
            
        });
        fetch('http://localhost:4000/friends').then(resp=> resp.json())
        .then(data=>{
            
            this.setState({friends:data})
            
        });
     }

    render(){

       
    
    return(
    <div className='menu'>
        <br/>
    <ul>
        <li><a href="/main-page/dashboard"><ion-icon name="layers-outline"></ion-icon> Dashboard</a></li>
        <li><a href="/main-page/recent-activity"><ion-icon name="flag-outline"></ion-icon> Recent activity</a></li>
        <li><a href="/main-page/expenses"><ion-icon name="list-outline"></ion-icon> All expenses</a></li>
    </ul>
    <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Groups <span className="add"><ion-icon name="add-outline"></ion-icon>Add</span></th>
                </tr>

            </thead>
            <tbody>
                {this.state.groups.map((element)=>{
                    return(<tr>
                            {element}
                        </tr>)
                })}
                
            </tbody>
    </table>
    <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Friends <span className="add" onClick={this.handleAddfriendShow}><ion-icon name="add-outline"></ion-icon>Add</span></th>
                </tr>

            </thead>
            <tbody>
                {this.state.friends.map((element)=>{
                    return(<tr>
                            {element}
                        </tr>)
                })}
                
            </tbody>
    </table>
    <AddFriends handleShow = {this.handleAddfriendShow.bind(this)} handleClose = {this.handleAddfriendClose.bind(this)} show={this.state.addFriend} changeState = {this.changeState.bind(this)}/>
</div>
)
}
}

export default menu;
