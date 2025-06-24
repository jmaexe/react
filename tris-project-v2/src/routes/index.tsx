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
      <Typography variant="h4" className="text">
        Seleziona la modalità di gioco:
      </Typography>

      <Stack spacing={3} sx={{ width: "200px" }}>
        <Button
          component={Link}
          to="/PvP"
          variant="contained"
          className="pvp-button"
          size="large"
        >
          PvP
        </Button>
        <Button
          component={Link}
          to="/PvBot"
          variant="contained"
          className="bot-button"
          size="large"
        >
          PvBot
        </Button>
      </Stack>
    </Box>
  );
}
