import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const shopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.incrementQuantity = (itemID) => {
    dispatch({ type: "INCEREMENT_QUANTITIY", payload: { id: itemID } });
  };

  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECREMENT_QUANTITIY", payload: { id: itemID } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };
  value.removeFromBasket = (itemID) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemID } });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
