import { Button, Grid } from "@mui/material";
import React from "react";

type BotBoardProps = {
  board: string[];
  playerSymbol: string;
  turn: string;
  winner: string | null;
  loading: boolean;
  makeMove: (i: number) => void;
};
const BotBoard = ({
  board,
  loading,
  makeMove,
  playerSymbol,
  turn,
  winner,
}: BotBoardProps) => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      sx={{ maxWidth: 320, margin: "auto", mt: 2, mb: 3 }}
    >
      {board.map((cell, idx) => {
        const disabled =
          cell !== "" || winner !== null || turn !== playerSymbol || loading;

        return (
          <Grid>
            <Button
              variant="outlined"
              onClick={() => makeMove(idx)}
              disabled={disabled}
              sx={{
                width: 100,
                height: 100,
                fontSize: 40,
                fontWeight: "bold",
                backgroundColor: cell === "" ? "#FFB805" : "#f5f5f5",
                color: "#920017",
                border: "4px solid #920017",
                boxShadow: `
      2px 2px 0 #fdad00,
      4px 4px 0 #920017
    `,
                textShadow: cell
                  ? `
        1px 1px 0 #920017,
        2px 2px 0 #fdad00
      `
                  : "none",
                transition: "all 0.15s ease-in-out",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                "&:hover": {
                  backgroundColor: "#FFD300",
                },
              }}
            >
              {cell}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BotBoard;
