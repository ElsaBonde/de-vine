"use client";

import { CartItem } from "@/data";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import { useCart } from "../ui/CartContext";

export default function CheckoutPage() {
  const { getCartItems, calculateTotalPrice, decreaseQuantity, increaseQuantity } = useCart(); // Hämta funktioner från kundvagnscontext

  // Hämta kundvagnsobjekten
  const cartItems: CartItem[] = getCartItems();

  return (
    <main style={{ background: "#F9F1EC", padding: "10px 20px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", margin: "10px" }}>
        Shopping bag
      </Typography>
      <Box>
        {cartItems.map((item, index) => (
          <Card
            key={index}
            data-cy="cart-item"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "white",
              marginBottom: "10px",
            }}
          >
            <Image src={item.image} alt={item.title} height={75} width={75} />
            <Box
              sx={{
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography data-cy="product-title">{item.title}</Typography>
              <Typography data-cy="product-price">
                {" "}
                {/* här får vi lägga till vad en kostar också */}
                {item.price * item.quantity} :-
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{ color: "#881C1C", fontSize: "18px" }}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>
                <Typography data-cy="product-quantity">
                  {item.quantity} pc
                </Typography>
                <Button
                  sx={{ color: "#881C1C", fontSize: "18px" }}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
      <Box>
        <Typography data-cy="total-price">
          Total: {calculateTotalPrice(cartItems)} SEK
        </Typography>
        <Button>Place Order</Button>
      </Box>
    </main>
  );
}
