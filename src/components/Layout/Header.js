import mealsimage from '../../assets/meals.jpg';
import React from 'react';
import classes from"./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
function Header(props){
   
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onclick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage} alt="ABCD"/>
            </div>
        </React.Fragment>
    );

}
export default Header;