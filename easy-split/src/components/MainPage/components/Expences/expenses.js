import React from 'react';


const expences = () =>{
    let exp = [
        {   
            id:1,
            day:"05",
            month:"MAY",
            description:"Breakfast",
            paid:"20.00",
            lendTo:"Rahul",
            lendAmound:"10.00"
        },

        {
            id: 2,
            day:"07",
            month:"DEC",
            description:"lunch",
            paid:"60.00",
            lendTo:"Swapnil",
            lendAmound:"30.00"
        },
        {
            id : 3,
            day:"05",
            month:"MAY",
            description:"Dinner",
            paid:"20.00",
            lendTo:"Rahul",
            lendAmound:"10.00"
        }

    ]

  const listItems = exp.map( (element) => {
  return (<div className="recent-activity">

            <div className="row">
                <div className="col-2 expense-date">
                    <span className="day">{element.day}</span><br/>
                    <span className="expence-month">{element.month}</span>
                </div>
                <div className="col-4">
                    <p>{element.description}</p>
                </div>
                <div className="col-3">
                    <span className="you-paid">you paid</span><br/>
                    <span className="paid-amount">INR{element.paid}</span>
                </div>
                <div className="col-3">
                    <sapn className="you-lend">you lend {element.lendTo}</sapn><br/>
                    <span className="lend-amount">INR{element.lendAmound}</span>
                </div>

            </div>
            </div>)
  })

    return(
                <div>
                    <div className="heading">
                        
                        <div className="row">
                            <div className="col-6">
                                <h4>All expenses</h4>
                            </div>

                            <div className="col-6">
                                <button className="btn btn-danger btn-sm add-expence">Add an expence</button>

                                <button className="btn btn-success btn-sm settle-up">Settle up</button>
                            </div>

                        </div>
                    </div>
                    <div>
                    {listItems}
                    </div>
                </div>
    )



    
}

export default expences;