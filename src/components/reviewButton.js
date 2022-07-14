import React from "react";

export default class ReviewButton extends React.Component{
   
        

    render() {
        //return React.createElement('button',{class: 'btn btn-primary'}, 'Write Review');
      return  <button 
                onClick={()=>{
                    console.log("pressed button")}}
                type="submit"
                class="btn btn-primary">Write Review</button>
    }
}