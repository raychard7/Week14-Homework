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
      usernames:[]
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
      usernames:[...this.state.usernames,this.state]
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

        
        {/* <textarea value={this.state.review} type="submit" onChange={this.handleReviewChange}  className="form-control" id="reviewtext" rows="10"  placeholder="Enter Review" /> */}
        <input type="submit" value="submit"/>
      </div>
      
      {/* <ReviewButton  /> */}
    </form>

      <h1>Reviews</h1>
      {this.state.usernames.map((username,index)=>(<p key={index}>{username.username}</p>))}
    {/* <Review username={this.state.username}  review={this.state.review} /> */}
    
      
  </div>
</div>
    )
  }
}
