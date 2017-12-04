import React from 'react';
import FoodItem from './FoodItem';

import map from 'lodash/map';

class FoodItems extends React.Component {
  constructor(props) {
    super(props);

    this.orderResults = this.orderResults.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  orderResults(array) {
    var sorted = array.sort(function(a, b) {
      return a.props.yearlyCost - b.props.yearlyCost;
    });

    return array.reverse();
  }

  renderItems(foodItems) {
    var array = map(foodItems, (foodItem, key) => (
      <FoodItem key={key} id={key} removeItem={this.props.removeItem} {...foodItem} />
    ));

    var sortedList = this.orderResults(array);

    return sortedList;
  }

  render() {
    const foodItems = this.props.foodItems;
    return (
      <div className="outline food-items">
        <h2>Yearly Cost</h2>
        <ul>{this.renderItems(foodItems)}</ul>
      </div>
    );
  }
}

export default FoodItems;
