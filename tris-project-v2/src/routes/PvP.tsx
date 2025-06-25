import { Box, Button, Modal, Paper, Typography } from "@mui/material";

import { createFileRoute, Link } from "@tanstack/react-router";

import { useState } from "react";
import PvPBoard from "../components/PvPBoard";
import PvPForm from "../components/PvPForm";
import RoomsList from "../components/RoomsList";

export const Route = createFileRoute("/PvP")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [inGame, setInGame] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        justifyContent: "center",
        alignItems: "start",
        p: 4,
      }}
    >
      {!inGame ? (
        <>
          <Paper elevation={3} sx={{ p: 3, width: 300, textAlign: "center" }}>
            <PvPForm
              name={name}
              setName={setName}
              room={room}
              setRoom={setRoom}
              enterInGame={() => {
                if (name.trim()) {
                  setInGame(true);
                }
              }}
            />
          </Paper>
          <Paper elevation={3} sx={{ p: 3, width: 300, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Stanze disponibili
            </Typography>
            <RoomsList selectRoom={(room) => setRoom(room)} />
          </Paper>
        </>
      ) : (
        <PvPBoard roomName={room} name={name} />
      )}
    </Box>
  );
}
