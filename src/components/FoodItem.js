import React from 'react';

class FoodItem extends React.Component {
  render() {
    const { name, amount, price, yearlyAmount, yearlyCost, user } = this.props;

    return (
      <div>
        <li>
          <span>
            <strong>{name}</strong>
          </span>
          <span>Amount per Year: {yearlyAmount}</span>
          <span>Cost Per Year: ${yearlyCost}</span>
        </li>
      </div>
    );
  }
}

export default FoodItem;
