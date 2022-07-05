import React from 'react'
import Star from '../starrating/star';
import "./movie.css";
export default class Movie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        movies:props.movies,
        title:props.title,
        synopsis: props.synopsis,
        rating: props.rating,
        image:props.image,
        time:props.time
        }
    }
  render() {

    

   

    return (
        
        <div className="card ">
        <img class="card-img-top" src="/images/starwars.jpg" alt="Card image cap"></img>
        <div className='card-header bg-success text-white'>
          Movie Title
        </div>

        <div className='card-body'>
          <h5 className= "card-title">{this.state.title}</h5>
          <p className= "card-text"> {this.state.synopsis}</p>
        </div>
        <ul className= "list-group list-group-flush">
            <li className="list-group-item">{this.state.rating}</li>
            <li className="list-group-item">{this.state.time}</li>
        </ul>
        <div className='card-footer'>
          {/*<Star />
          <ReviewButton />
          <ReviewList />*/}
        
         
        </div>
      </div>

    )
  }
}
