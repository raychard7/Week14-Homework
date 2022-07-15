//A form at the bottom of a movie component. Lets users leave a review. After submission review added to movie.
//All data stored in an array.
//Create review form Every inputed review adds another review comonent to the dom.

import React  from 'react'
import Review from './review'
import StarRating from './starrating/stars'
import ReviewButton from './reviewButton'

export default class ReviewList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      usernames:[],
      reviews:[]
      // username: "",
      // review: "",
      // submit: ""
    }
    // this.handleUserNameChange=this.handleUserNameChange.bind(this);
    // this.handleReviewChange=this.handleReviewChange.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);

  }
  //username vs username?? username here.
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleReviewChange =(event) => {
    this.setState({
      review: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      //How to submit both username and review text.
      // submit:this.state.username

      //[arg1=spread operater takes in everything from username input and dumps into usernames[]. Gathers data, arg2= sends data ]
      usernames:[...this.state.usernames,this.state],
      //this.state reference array of objects.

      reviews:[...this.state.reviews,this.state]
    })
    
  }

  render() {
    console.log("This is my username " + this.state.username)
    return (
<div className="card w-100 ">
  <div className='card-header bg-success text-white'>
      Reviews
  </div>
  
  <div className='card-footer'>
   
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <StarRating />
        <label for="reviewtext">1 out 5 stars how was it?</label>
        <input  
        class="form-control"  
        id="username" 
        placeholder="Enter username" name="username" onChange={this.handleUserNameChange} />

        
        <textarea value={this.state.review} type="submit" onChange={this.handleReviewChange}  className="form-control" id="reviewtext" rows="10"  placeholder="Enter Review" />
        <input type="submit" value="submit" class= "btn btn-primary" />
      </div>
  
    </form>

      <h1>Reviews</h1>
      
      {/* <Review username={this.state.username}  review={this.state.review} /> */}
      {/* The map() function is used to iterate over an array and manipulate or change data. */}
      {/* array with 2 objects per entry [object object] */}
      {/* The key is for the map to iterate and have index value, does not render. */}
      {/* 
      1st username: usernames array current i.
      2nd username:At that specific current state
      */}
      {this.state.usernames.map((username,index)=>(<p key={index}>{username.username}</p>))}

      {this.state.reviews.map((review,index)=>(<p key={index}>{review.review}</p>))}


  </div>
</div>
    )
  }
}
