import React from 'react';
import AddFoodForm from './AddFoodForm';
import FoodItem from './FoodItem';

class CostOutput extends React.Component {
  constructor() {
    super();
    this.calculateCost = this.calculateCost.bind(this);
  }

  calculateCost() {
    const timesPurchased = this.props.timesPurchased;
  }

  render() {
    return (
      <div className="outline">
        <h2>Food Items</h2>
      </div>
    )
  }
}

export default CostOutput;
