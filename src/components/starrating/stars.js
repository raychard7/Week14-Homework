//counter on button with star(font awesome.)
// https://youtu.be/eDw46GYAIDQ
import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import {FiStar} from "react-icons/fi";
import './stars.css'


const StarRating =() => {
  const [rating, setRating] = useState(null)

  return(
    <div> 
      {/* Create array with 5 untitled indexes in it [...array(5)] */}
      {[...Array(5)].map((star,i)=>{
        const ratingValue = i+1;

        return (
         <label>
          <input type="radio" name="rating" value={ratingValue}/>
          <FaStar size={50} className="star" />
         </label> 
        
        );
      })}
      
    </div>
  ) 
   
}

export default StarRating

