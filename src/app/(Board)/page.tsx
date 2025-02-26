import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Grid } from "@mui/system";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Grid container spacing={3}>
          <Card elevation={7} sx={{ p: 1 }}>
            Next.js@15.1.6
          </Card>
          <Card elevation={7} sx={{ p: 1 }}>
            MUI@7.0.0-alpha.0
          </Card>
          <Card elevation={7} sx={{ p: 1 }}>
            react@19.0.0
          </Card>
        </Grid>
      </Box>
    </Container>
  );
}
