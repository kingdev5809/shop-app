import {  useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { Loader } from "./Loader";
import { GoodList } from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { shopContext } from "../context";

function Shop() {
  const { goods, setGoods, loading, order, isBasketShow } =
    useContext(shopContext);


  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);
// 
  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList  />}
    </div>
  );
}

export { Shop };
