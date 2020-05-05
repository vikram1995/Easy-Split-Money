import React from 'react';


const menu  = () =>{

    let groups =["Room Mates", "classmates"] ;

    let friends = ["Rahul", "Swapnil", "Subham"]
    
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
                    <th scope="col">Groups <span><ion-icon name="add-outline"></ion-icon>Add</span></th>
                </tr>

            </thead>
            <tbody>
                {groups.map((element)=>{
                    return(<tr>
                            {element}
                        </tr>)
                })}
                
            </tbody>
    </table>
    <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Friends <span><ion-icon name="add-outline"></ion-icon>Add</span></th>
                </tr>

            </thead>
            <tbody>
                {friends.map((element)=>{
                    return(<tr>
                            {element}
                        </tr>)
                })}
                
            </tbody>
    </table>
</div>
)
}

export default menu;
