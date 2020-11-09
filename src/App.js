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
import CartPage from './components/views/Cart/CartPage';
// import OrderPage from './components/pages/Order/OrderPage.js';
// import NotFound from './components/pages/NotFound/NotFoundPage';


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
              <Route path="/cart" exact component={CartPage} />
              {/*<Route path="/order" exact component={OrderPage} />*/}
              {/*<Route component={NotFound} />*/}
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
