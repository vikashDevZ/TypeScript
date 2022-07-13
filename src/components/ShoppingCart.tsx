import React from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Stack,
} from "react-bootstrap";
import { useShoppingCart } from "../context/shopping";
import { formatCurrency } from "../utilties/currency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            total{" "}
            {formatCurrency(
              cartItems.reduce((total, current) => {
                const item = storeItems.find((item) => item.id === current.id);
                return total + (item?.price || 0) * current.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ShoppingCart;
