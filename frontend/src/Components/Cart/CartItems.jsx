import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssemblyfromCart, fetchCart } from "../../features/usersSlice";
import styles from "./Cart.module.css";

const CartItems = ({ id }) => {
  const assembles = useSelector((state) => state.assembles.assembles);
  const dispatch = useDispatch();
  return (
    <>
      {assembles.map((assembly) => {
          const handleDelete =  async () => {
             await dispatch(deleteAssemblyfromCart({userId: localStorage.getItem('id'), assemblyId: assembly._id}));
             dispatch(fetchCart({userId: localStorage.getItem('id')}));;
              }
        if (assembly._id === id) {
          return (
            <div className={styles.basket_itemBox}>
              <div className={styles.basket_item}>
                <div className={styles.basket_itemCard}>
                  <img
                    className="basket_ItemImage"
                    src={`/assets/images/accessories/${assembly.image}`}
                    alt="poster"
                  />
                  <p className={styles.basket_itemName}>{assembly.name}</p>
                </div>
                <div className={styles.itemPrice}>{assembly.cost} </div>
                <img
                  className={styles.costImage}
                  src="/assets/images/cost.png"
                  alt=""
                />
                <button className={styles.buttonBuy}>Купить</button>
                <button onClick={handleDelete} className={styles.buttonDelete}>X</button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default CartItems;