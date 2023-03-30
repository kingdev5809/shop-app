import { useContext } from "react";
import { shopContext } from "../reducer";

export default function Basketitem (props) {
  const { id, name, price, quantity } = props;
  const { incrementQuantity, decrementQuantity, removeFromBasket } =
    useContext(shopContext);

  const { example } = useContext(shopContext);

  console.log(example);

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>add
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons left">exposure_minus_1</i>remove
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i> delete
        </a>
      </span>
    </li>
  );
}
