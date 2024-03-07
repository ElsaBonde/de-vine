"use client";

import { AddShoppingCart } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useCount } from "./AddContext";

interface Props {
  add: number;
}

export default function AddButton(props: Props) {
  //skapar en variabel som vi kan använda för att uppdatera antalet items i kundkorgen samt en variabel för att visa en snackbar
  const { count, setCount } = useCount();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  

  //ökar antalet items i kundkorgen, lägger till dem i LS och visar snackbaren
  const handleClick = () => {
    const newCount = count + props.add;
    const currentCartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
    currentCartItems.push(props.add);
  
    localStorage.setItem("cart-items-count-badge", newCount.toString());
    localStorage.setItem("cart-items", JSON.stringify(currentCartItems));
    
    setCount((prevCount) => prevCount + props.add);
    setOpenSnackBar(true);
  };

  //stänger snackbaren
  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  return (
    <>
      <AddShoppingCart
        sx={{ "&:hover": { backgroundColor: "green" } }}
        data-cy="product-buy-button"
        onClick={handleClick}
      />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Added to cart!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackBar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
}
