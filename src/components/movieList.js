//Container for all Movie components and their Data
//Main!

import React from 'react'
import Movie from './movie'

export default class MovieList extends Component {
  
  
    render() {
    return (
      <div className= 'container'>
        <Movie />
      </div>  
      
    )
  }
}
