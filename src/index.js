import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/index.css';
import App from './components/App';
import FoodInput from './components/FoodInput';
import registerServiceWorker from './registerServiceWorker';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </BrowserRouter>
  )
}

render(<App />, document.getElementById("root"));
