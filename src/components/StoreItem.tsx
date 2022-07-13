import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/shopping";
import { formatCurrency } from "../utilties/currency";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  // console.log(quantity)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=> increaseQuantity(id)}> Add to Cart </Button>
          ) : (
            <div
              style={{ gap: ".5rem" }}
              className="d-flex align-items-center flex-column"
            >
              <div
                style={{ gap: ".5rem" }}
                className="d-flex align-items-center justify-content-center"
              >
                <Button onClick={()=> decreaseQuantity(id)}>-</Button>
                <div>
                  {" "}
                  <span className="fs-4">{quantity}</span> in cart
                </div>
                <Button onClick={()=> increaseQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={()=> removeQuantity(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
