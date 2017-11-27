import React from 'react';
import AddFoodForm from './AddFoodForm';

class FoodInput extends React.Component {
  createItem(event) {
    event.preventDefault();
    const food = {
      name: this.name.value,
      amount: this.amount.value
    };
    this.props.addFood(food);
  }

  render() {
    return (
      <div className="outline">
        <h2>Add Food Item</h2>
        <AddFoodForm addFoodItem={this.props.addFoodItem} />
      </div>
    );
  }
}

export default FoodInput;
