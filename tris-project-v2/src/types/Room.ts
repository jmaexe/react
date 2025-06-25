export type Room = {
  room_name: string;
  players: string[];
};

export const fetchRooms = async (): Promise<Room[]> => {
  const res = await fetch(`http://${window.location.hostname}:8000/rooms/`);
  if (!res.ok) throw new Error("Errore nel caricamento delle stanze");
  const data = await res.json();
  console.log(data);

  return data.rooms as Room[];
};
