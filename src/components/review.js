//A text review a user can leave on a movie.(like a comment on a post.)
import React from "react"

export default class Review extends React.Component {
    render(){

      return (
        <div className="card w-100">
          <div className="card-header bg-success text-white">
            username
            {/* {this.props.username} */}
          </div>
          <div className="card-body">
            Review 
            {/* {this.props.Review} */}
            <p>stars</p>
          </div>
          <div className="card-footer">
            
          </div>
        </div>
      )  
    }
}