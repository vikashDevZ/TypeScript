import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shopping";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilties/currency";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeQuantity } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
            {item.name} {quantity > 0 &&<span className="text-muted" style={{fontSize:"1rem"}}>{quantity}x</span>}
        </div>
        <div className="text-muted" style={{fontSize:"1rem"}}>
            {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price*quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={()=>removeQuantity(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
