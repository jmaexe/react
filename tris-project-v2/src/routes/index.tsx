import { Box, Button, Stack, Typography } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "40%",
          left: "33%",
          fontWeight: 700,
          color: "#920017",
        }}
      >
        Benvenuto a Tris!
      </Typography>

      <Stack spacing={3} sx={{ width: "200px" }}>
        <Button
          component={Link}
          to="/PvP"
          variant="contained"
          color="primary"
          size="large"
          sx={{ position: "absolute", top: "51%", left: "42,5%", width: "12vw" }}
        >
          PvP
        </Button>
        <Button
          component={Link}
          to="/PvBot"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ position: "absolute", top: "56%", left: "42,5%", width: "12vw" }}
        >
          PvBot
        </Button>
      </Stack>
    </Box>
  );
}
