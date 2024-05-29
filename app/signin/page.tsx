"use client";

import { providerMap } from "@/auth";
import { Box, Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <>
      <Box component="div" sx={{ display: "flex", height: "100%" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#5A5353",
              fontSize: {
                xs: "1.2rem",
                sm: "1.3rem",
                md: "1.5rem",
                lg: "2rem",
              },
            }}
          >
            Please sign in to continue
          </Typography>
          {Object.values(providerMap).map((provider) => (
            <>
              <Box
                component="form"
                key={provider.id}
                action={async () => {
                  await signIn(provider.id, { callbackUrl: "/" });
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    minWidth: "200px",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#440000",
                    },
                  }}
                >
                  <span>Sign in with {provider.name}</span>
                </Button>
              </Box>
            </>
          ))}
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundImage: "url('/winebackground.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white ",
            p: 4,
            textAlign: "center",
          }}
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textShadow:
                "0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(9, 9, 9, 0.41)",
            }}
          >
            Welcome to DiWine
          </Typography>
        </Box>
      </Box>
    </>
  );
}
