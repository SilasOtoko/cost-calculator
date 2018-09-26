import React from 'react';
import firebase, { database } from '../firebase';
import { calculateYearlyCost } from '../helpers';
import { calculateYearlyAmount } from '../helpers';

class AddFoodForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: '',
      yearlyCost: '',
      yearlyAmount: '',
      price: ''
    };

    this.foodItemRef = database.ref('foodItems');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var yearlyCostData = calculateYearlyCost(this.state.amount, this.state.price);
    var yearlyAmountData = calculateYearlyAmount(this.state.amount);

    this.foodItemRef.push({
      user: this.props.currentUser.uid,
      name: this.state.name,
      amount: this.state.amount,
      yearlyCost: yearlyCostData,
      yearlyAmount: yearlyAmountData,
      price: this.state.price
    });
  }

  render() {
    const { name, amount, price } = this.state;
    return (
      <div className="food-form">
        <form>
          <input
            type="text"
            value={name}
            placeholder="Food Name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <input
            ref={input => (this.amount = input)}
            type="number"
            placeholder="Times Purchased Per Month"
            onChange={event => this.setState({ amount: event.target.value })}
          />
          <input
            ref={input => (this.price = input)}
            type="number"
            step=".01"
            placeholder="Price Per Item"
            onChange={event => this.setState({ price: event.target.value })}
          />

          <button onClick={this.handleSubmit} disabled={!name && !amount}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;
