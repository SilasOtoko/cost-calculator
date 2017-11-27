import React from 'react';
import FoodInput from './FoodInput';
import CostOutput from './CostOutput';
import Header from './Header';
import FoodItem from './FoodItem';
import Login from './Login';
import CurrentUser from './CurrentUser';
import { auth, database } from '../firebase';

import map from 'lodash/map';

class App extends React.Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      currentUser: null,
      foodItems: null
    };

    this.foodItemsRef = database.ref('/foodItems');
    this.orderResults = this.orderResults.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      this.foodItemsRef.on('value', snapshot => {
        this.setState({ foodItems: snapshot.val() });
      });
    });
  }

  orderResults(foodItems) {
    var array = map(foodItems, (foodItem, key) => <FoodItem key={key} {...foodItem} />);

    var sorted = array.sort(function(a, b) {
      return a.props.yearlyCost - b.props.yearlyCost;
    });

    return array.reverse();
  }

  render() {
    const { currentUser, foodItems } = this.state;

    return (
      <div className="app">
        {<Header tagline="Find out the true cost of your meals" />}
        <div>
          <div>{!currentUser && <Login />}</div>
          {currentUser && (
            <div className="app-main">
              <FoodInput addFoodItem={this.addFoodItem} />
              <CurrentUser user={currentUser} />
              <ul className="outline">
                <h2>Yearly Cost</h2>
                <div className="food-item">{this.orderResults(foodItems)}</div>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
