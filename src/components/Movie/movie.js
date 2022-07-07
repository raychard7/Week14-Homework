import React from 'react'
import StarRating from '../starrating/stars';
import "./movie.css";
export default class Movie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        title: props.title,
        synopsis: props.synopsis,
        rating: props.rating,
        image: props.image,
        };
    }
     


  render() {

  //   console.log("test",this.state.title)
  //  console.log("image", this.state.image)
  // images/superman.jpg
    return (
        
        <div className="card" >
        <img className="card-img-top" src={this.state.image} alt="Card image cap"></img>
        
        <div className='card-body'>
          
          <h5 className= "card-title">{this.state.title}</h5>
          <p className= "card-text"> {this.state.synopsis}</p>
        </div>
        <ul className= "list-group list-group-flush">
            <li className="list-group-item">{this.state.rating}</li>
        </ul>
        <div className='card-footer'>
          <StarRating />
          {/* <ReviewButton />
          <ReviewList /> */}
        
         
        </div>
      </div>

    )
  }
}
