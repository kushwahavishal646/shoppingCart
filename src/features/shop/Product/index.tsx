import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../../context/shopContext";
import { useTranslation } from "react-i18next";

export interface IProduct {
  id: number;
  productName: string;
  price: number;
  productImage: string;
}

const Product: React.FunctionComponent<IProduct> = (props) => {
  const { t } = useTranslation("shop");
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.id];

  return (
    <div className="productContainer">
      <img
        src={props.productImage}
        alt={`${props.productName}`}
        className="productImage"
      />
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p>
          <b>${props.price}</b>
        </p>
        <button className="addToCartBttn" onClick={() => addToCart(props.id)}>
          {t("addToCart")} {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
