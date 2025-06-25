import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { fetchRooms, type Room } from "../types/Room";
import Error from "./Error";
import Loading from "./Loading";

type RoomsListProps = {
  selectRoom: (room: string) => void;
};
const RoomsList = ({ selectRoom }: RoomsListProps) => {
  const {
    isFetching,
    isLoading,
    error,
    data: rooms,
    refetch,
  } = useQuery<Room[]>({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchInterval: 60000,
  });
  return (
    <>
      {error && <Error error={error.message} />}
      {(isFetching || isLoading) && <Loading size={20} />}{" "}
      {rooms && (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => refetch()}
          >
            Riprova
          </Button>
          <List>
            {rooms.length == 0 ? (
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Typography textAlign="center" color="primary.main">
                  Nessuna stanza trovata
                </Typography>
              </Box>
            ) : (
              rooms.map((r: Room) => (
                <ListItem key={r.room_name} disablePadding>
                  <ListItemButton onClick={() => selectRoom(r.room_name)}>
                    <ListItemText sx={{ color: "#920017" }}>
                      {r.room_name}{" "}
                    </ListItemText>

                    <ListItemText sx={{ color: "#920017" }}>
                      {r.players.join(", ")}{" "}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            )}
          </List>
        </>
      )}
    </>
  );
};

export default memo(RoomsList);
