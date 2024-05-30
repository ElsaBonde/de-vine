"use client";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { orderNumber } from "../actions/orderActions";
import { getProducts } from "../actions/productActions";
import { userNumber } from "../actions/userActions";
import AddProductCard from "../admin/addProductCard";

export default function AdminDashboard() {
  const [usersCount, setUsersCount] = useState<number>(0);
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [productsCount, setProductsCount] = useState<number>(0);

  //david kan man göra detta på ett bättre sätt eller duger det?
  useEffect(() => {
    const fetchAndSetUserNumber = async () => {
      const userCount = await userNumber();
      setUsersCount(userCount);
    };

    fetchAndSetUserNumber();
  }, []);

  useEffect(() => {
    const fetchAndSetOrderNumber = async () => {
      const orderCount = await orderNumber();
      setOrdersCount(orderCount);
    };

    fetchAndSetOrderNumber();
  }, []);

  useEffect(() => {
    const fetchAndSetTotalProducts = async () => {
      const products = await getProducts();
      setProductsCount(products.length);
    };
    fetchAndSetTotalProducts();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          marginTop: "20px",
          gap: { xs: "20px", sm: "0px" },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#1F1724",
              fontFamily: "josefin sans",
            }}
          >
            Dashboard
          </Typography>
        </Box>
        <Box>
          <AddProductCard />
        </Box>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "0px",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={NextLink}
            href="/admin/users"
            sx={{
              background: "#e9e5e5c6",
              border: "1px solid #c8c3c3c5",
              borderRadius: "8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              cursor: "pointer",
              color: "#1F1724",
            }}
          >
            <PeopleIcon
              sx={{
                fontSize: "60px",
                background:
                  "linear-gradient(to right, #AE8625, #F7EF8A, #D2AC47, #EDC967)",
                color: "#1F1724",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "josefin sans" }}>
                {usersCount}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "josefin sans" }}>
                Users
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={NextLink}
            href="/admin/orders"
            sx={{
              background: "#e9e5e5c6",
              border: "1px solid #c8c3c3c5",
              borderRadius: "8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              cursor: "pointer",
              color: "#1F1724",
            }}
          >
            <ShoppingCartIcon
              sx={{
                fontSize: "60px",
                background:
                  "linear-gradient(to right, #AE8625, #F7EF8A, #D2AC47, #EDC967)",
                color: "#1F1724",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "josefin sans" }}>
                {ordersCount}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "josefin sans" }}>
                Orders
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={NextLink}
            href="/admin/products"
            sx={{
              background: "#e9e5e5c6",
              border: "1px solid #c8c3c3c5",
              textDecoration: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              cursor: "pointer",
              color: "#1F1724",
            }}
          >
            <AttachMoneyIcon
              sx={{
                fontSize: "60px",
                background:
                  "linear-gradient(to right, #AE8625, #F7EF8A, #D2AC47, #EDC967)",
                color: "#1F1724",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontFamily: "josefin sans" }}>
                {productsCount}
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "josefin sans" }}>
                Products
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
