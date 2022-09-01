import { useContext } from 'react';

import ItemForm from './ItemForm';
import classes from './Items.module.css';
import CartContext from '../../store/cart-context';

const Item = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            imageUrl: props.imageUrl,
            amount: amount,
            price: props.price
        });
    };

    return(
        <li className={classes.item}>
            <div>
                <img src={props.imageUrl} alt={props.title}/>
                <h3>{props.title}</h3>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <ItemForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    );
};

export default Item;