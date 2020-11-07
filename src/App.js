import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import {MainLayout} from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Home/Homepage';
import ProductsPage from './components/views/Products/ProductsPage';
import ProductPage from './components/views/Product/ProductPage';
// import NotFound from './components/pages/NotFound/NotFoundPage';
// import Prices from './components/pages/Prices/PricesPage';
// import Order from './components/pages/Order/OrderPage.js';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/products/:id" exact component={ProductPage} />
              {/*<Route component={NotFound} />*/}
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
