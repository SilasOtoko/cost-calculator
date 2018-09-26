import React from 'react';

import map from 'lodash/map';

class FoodItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, amount, price, yearlyAmount, yearlyCost, user } = this.props;

    const key = this.props.id;

    return (
      <li className="food-item">
        <span>
          <strong>{name}</strong>
        </span>
        <span>Amount per Year: {yearlyAmount}</span>
        <span>Cost Per Year: ${yearlyCost}</span>
        <button className="button-danger" onClick={() => this.props.removeItem(key)}>
          Remove
        </button>
      </li>
    );
  }
}

export default FoodItem;
