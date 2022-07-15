constructor(props) {
    super(props); //need super to call the constructor of the parent class
    this.state = {
      reviews: [], //set the initial state to an empty array
    };
  }
  //handleChange function to update the state when the user types in form
  handleChange = (e) => {
    //event is the event object that is passed in
    this.setState({
      review: e.target.value, //set the state of the component to the value of the event target (value of the input field).
    });
  };
  //handleSubmit function to handle the submit event and add the review to the state array
  handleSubmit = (e) => {
    e.preventDefault(); //mdn: preventDefault() - prevents the default action of an element from happening.
    this.setState({
      reviews: [...this.state.reviews, this.state], //add the review to the state's review array
      //second argument is an array of objects. The spread operator is used to add the review to the array.
      //does a spread operator need a second argument?  I think so. The second argument is the array to spread.
    });
  };
  render() {
    console.log(this.state.reviews); //print reviews array to the console to ensure its updating
    return (
      <div>
        <h3>Review Form</h3>
        {/* form */}
        {/* onSubmit is a callback function that is called when the form is submitted */}
        <form onSubmit={this.handleSubmit}>
          {/* onChange is a callback function that is called when the user types in the form field */}
          <textarea rows={5} name="review" onChange={this.handleChange} />
          <br></br>
          <input type="submit" value="submit" />
        </form>
        {/* Review renders below: */}
        <h3>List of Reviews:</h3>
        {/* The map() function is used to iterate over an array and manipulate or change data items*/}
        {this.state.reviews.map(
          (
            review,
            index //map through the reviews array. index is for unique key prop
          ) => (
            <p key={index}>{review.review}</p> //display the review.
          )
        )}
      </div>
    );
  }
}