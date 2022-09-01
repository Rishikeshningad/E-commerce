import React,{useState} from 'react';
import { useContext } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/Layout/Header';

import Layout from './components/Layout/Layout';
import AuthPage from './components/Pages/AuthPage';
import HomePage from './components/Pages/HomePage';
import UserProfile from './components/Profile/UserProfile';

import Cart from './components/Cart/Cart';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import AvailableItem from './components/Items/AvailableItem';
import CartProvider from './store/CartProvider';
import ContactUs from './components/Pages/ContactUs';
import Products from './components/Pages/Products';
import ProductDetail from './components/Pages/ProductDetail';
import AuthContext from './store/auth-context';

function  App() {
 const authCtx = useContext(AuthContext);

 const [cartIsShown, setCartIsShown] = useState(false);
 
 const showCartHandler = () => {
  setCartIsShown(true);
 };

 const hideCartHandler = () => {
  setCartIsShown(false);
 };
console.log(authCtx);
  return(
    <CartProvider>
   {cartIsShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
   <Switch>
   
   {!authCtx.isLoggedIn && (<Layout>
   <Route path='/' exact> <Redirect to='/auth'/> </Route>
   <Route path='/homepage' > <HomePage /> </Route>
   <Route path='/auth'> <AuthPage /> </Route>
   <Route path='/profile'> <UserProfile /> </Route>
   </Layout>)}
   
   {authCtx.isLoggedIn && (<Route path='/Home'><Home/></Route>)}
   
   <Route path='/About'><About/></Route>
   <Route path='/' exact><AvailableItem/></Route>
   <Route path='/ContactUs'><ContactUs/></Route>
   <Route path='/Products' exact><Products/></Route>
   <Route path='/products/:productId'><ProductDetail/></Route>
   
   </Switch>
   
   </CartProvider>
  );
};

export default App;