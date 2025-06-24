import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div>
      Carimento in corso... <CircularProgress size={20} />
    </div>
  );
};

export default Loading;
