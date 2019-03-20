import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodItem from './components/FoodItem'
import FormAdd from './components/FormAdd'

class App extends Component {
  state = {
    foodList: foods
  }

  addFood = (name, calories, image) => {
    const newFood = {
      name,
      calories,
      image
    }
    this.setState({
      foodList: [...this.state.foodList, newFood]
    })
  }

  render() {
    return (
      <div className="box">

        <FormAdd addNewFood={this.addFood}/>

        {this.state.foodList.map((item, index) => {
          return <FoodItem
                    key ={`id${index}`}
                    name={item.name}
                    image={item.image}
                    calories={item.calories}
                  />
        })}
      </div>
    );
  }
}

export default App;
