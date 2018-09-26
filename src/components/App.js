import React from 'react';
import FoodInput from './FoodInput';
import Header from './Header';
import FoodItems from './FoodItems';
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

    this.foodItemsRef = database.ref('foodItems');
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      if(currentUser) {
        this.foodItemsRef.orderByChild('user').equalTo(this.state.currentUser.uid).on('value', snapshot => {
          this.setState({ foodItems: snapshot.val() });
        });
      }
    });
  }

  removeItem(key) {
    console.log('called');
    const { foodItems } = this.state;
    var item = foodItems[key];
    this.foodItemsRef.child(key).remove();
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
              <FoodInput addFoodItem={this.addFoodItem} currentUser={currentUser} />
              <CurrentUser user={currentUser} />
              <FoodItems removeItem={this.removeItem} foodItems={foodItems} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
