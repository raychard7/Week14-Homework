//counter on button with star(font awesome.)
// https://youtu.be/eDw46GYAIDQ
import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import './stars.css'


const StarRating =() => {

  const [rating, setRating] = useState(null);
  

  return(
    <div> 
      {/* Array(length): is an array constructor.
       with 5 untitled indexes in it 
       [...array(5)] =[ 1,2 , 3, 4,5 ],
       
       */}
      {[...Array(5)].map((star,i)=>{
        // map((star,i= starts an iterator i=0,1,2,3)), i+1 starts i at  1.
        const ratingValue = i+1;
        //ratin values 1, 2, 3, 4 ,5 
        return (
         <label>
          <input 
          type="radio" 
          name="rating" 
          value={ratingValue} 
          onClick={()=> setRating(ratingValue)}
          />
          <FaStar size={50} 
          // rating= pre-pressed star.
          //ratingValue= star we are hovering.
          color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
           className="star" />
         </label> 
        
        );
      })}
      
    </div>
  ) 
   
}

export default StarRating

