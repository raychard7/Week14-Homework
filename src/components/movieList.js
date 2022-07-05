//Container for all Movie components and their Data
//Main!

import React from 'react'
import Movie from './Movie/movie'


export default class MovieList extends React.Component {
  
  
    render() {

    //   let movies = [
    //     {
    //         title: "Star Wars",
    //         synopsis: "Orphan samurai wizards search for their dads!",
    //         rating: "5/5",
    //         time: "90 min",
    //         image: "./public/images/starwars.jpg"
    //     },
    //     {
    //         title: "Man of Steel",
    //         synopsis: "Alien Farmer kid moves to the big city to live it large.",
    //         rating: "4.5/5",
    //         time: "100 min",
    //         image: "/images/superman.jpg"
    //     },
    //     {
    //         title: "Batman",
    //         synopsis: "Kid finds out his superpower is being rich and he buys the most expensive leather suit he can find!",
    //         rating: "6/5 ..That's right.",
    //         time: "60 min",
    //         image:"images/batman.jpg"
    //     }
    //   ]    



      let movies = [];
    if(this.state.movies){
      for ( let movie of this.state.movies){
        movies.push(<Movie {...movie} />)
      }
    }
      

    return (
      
        <div className= "card-group">
            
            
            <Movie {...{movies: movies, title: 'Starz'}} />
            <Movie title="Star Wars" synopsis="Orphan samurai wizards search for their dads!" rating="5/5 Stars" time="Run Time: 5 Hours" />
            <Movie title="Star Wars" synopsis="Orphan samurai wizards search for their dads!" rating="5/5 Stars" time="Run Time: 5 Hours" />
            {movies}
            
        </div>
        
       
    )
  }
}
