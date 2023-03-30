import { useContext } from "react";
import { shopContext } from "../context";
import { GoodItem } from "./GoodItem";

function GoodList(props) {
  const { goods = [],  } = useContext(shopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item}  /> 
      ))}
    </div>
  );
}

export { GoodList };
