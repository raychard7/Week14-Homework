//Container for all Movie components and their Data
//Main!

import React from 'react'
import Movie from './Movie/movie'


export default class MovieList extends React.Component {
    
  
    render() {

      let mymovies = [
        {
            title: "Star Wars",
            synopsis: "Orphan samurai wizards search for their dads!",
            rating: "5/5",
            image: "./public/images/starwars.jpg",
        },
        {
            title: "Man of Steel",
            synopsis: "Alien Farmer kid moves to the big city to live it large.",
            rating: "4.5/5",
            image: "/images/superman.jpg",
        },
        {
            title: "Batman",
            synopsis: "Kid finds out his superpower is being rich and he buys the most expensive leather suit he can find!",
            rating: "6/5 ..That's right.",
            image: "images/batman.jpg",
        }
      ]    
      let starwars= {
        title: "Star Wars",
        synopsis: "Orphan samurai wizards search for their dads!",
        rating: "5/5",
        image: "./public/images/starwars.jpg",
    }
     
      
      

    return (
      
        <div className= "card-group">
            
            <Movie {...starwars} />
           
            
        </div>
        
       
    )
  }
}
