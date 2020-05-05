import React from 'react';


const recentActivity = () =>{

    let activity = [
        {
            id : 1,
            task : "added",
            type: "expense",
            description : "Dinner",
            image:"",
            date:"12/01/2020",
            day: "Monday",
        },

        {
            id : 2,
            task : "Created",
            type: "group",
            description : "flat",
            image:"",
            date:"13/02/2020",
            day: "Tuesday",
        },
        {
            id : 3,
            task : "deleted",
            type: "group",
            description : "flat",
            image:"",
            date:"14/02/2020",
            day: "Wednesday",
        }

    ]

  const listItems = activity.map( (element) => {
  return (<div className="recent-activity-list">
      <p>You {element.task} "{element.description}" {element.type} on {element.date}<br/>{element.day}</p></div>)
  })

    return(
                <div>
                    <div className="heading">
                        <h3>Recent activity</h3>
                    </div>
                    <div>
                    {listItems}
                    </div>
                </div>
    )


}

export default recentActivity;