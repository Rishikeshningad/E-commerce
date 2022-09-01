import {Fragment} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MainNavigation from './MainNavigation';


const Header = (props) => {
return( 
<Fragment>
    <header >
        <div className={classes.header}>
        <NavLink className={classes.a} to='/HOME'>HOME</NavLink>
        <NavLink className={classes.a} to='/' exact>STORE</NavLink>
        <NavLink className={classes.a} to='/ABOUT'>ABOUT</NavLink>
        <NavLink className={classes.a} to='/ContactUs'>ContactUs</NavLink>
        <NavLink to='/PRODUCTS'>Products</NavLink>
        <MainNavigation/>
        <HeaderCartButton className={classes.cart} onClick={props.onShowCart}/>
        </div>
        <h1 className={classes.heading}>The Generics</h1>
        </header>

</Fragment>
)};

export default Header;
