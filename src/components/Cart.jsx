import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      //we pass the id inside '{}' because if we not do this then action.payload want the id only that's why we pass {id} here and action.payload takes the id as 'Object.id'
      payload: { id },
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
  };

  return (
    <>
      <div className="cart">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map((i) => (
              <>
                <CartItem
                  imgSrc={i.imgSrc}
                  name={i.name}
                  price={i.price}
                  qty={i.quantity}
                  id={i.id}
                  key={i.id}
                  decrement={decrement}
                  increment={increment}
                  deleteHandler={deleteHandler}
                />
              </>
            ))
          ) : (
            <>
              <h1>No items yet</h1>
            </>
          )}
        </main>
        <aside>
          <h2>Subtotal : ${2000}</h2>
          <h2>Shipping : ${100}</h2>
          <h2>Tax : ${20}</h2>
          <h2>Total : ${12000}</h2>
        </aside>
      </div>
    </>
  );
};
const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <>
    <div className="cartItem">
      <img src={imgSrc} alt="item" />

      <article>
        <h3> {name}</h3>
        <p>${price}</p>
      </article>

      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>

      <AiFillDelete onClick={() => deleteHandler()} />
    </div>
  </>
);

export default Cart;
