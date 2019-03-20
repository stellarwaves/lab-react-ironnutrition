import React, { Component } from 'react';

class FormAdd extends Component {
   state = {
      name: "",
      calories: "",
      image: ""
   }

   handleInput = (event) =>{
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleAdd = (event) => {
      event.preventDefault()
      this.props.addNewFood(this.state.name, this.state.calories, this.state.image)
   }

   render() {
      return (
         <form className="add-item" onSubmit={this.handleAdd}>
            <h2>Add some food you like</h2>
            <input 
               className="input" 
               type="text"
               name="name" 
               value={this.state.name}
               placeholder="Name"
               onChange={this.handleInput}/>

            <input 
               className="input" 
               type="number" 
               name="calories" 
               value={this.state.calories}
               placeholder="Calories"
               onChange={this.handleInput}/>

            <input
               className="input"  
               type="text" 
               value={this.state.image}
               name="image"
               onChange={this.handleInput}/>

            <hr/>

            <button className="button is-primary" type="submit">Add item</button>
         </form>
      )
   }
}

export default FormAdd;
