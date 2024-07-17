import React from "react";
import { Box } from "@mui/material";
import Boxes from "./Boxes";

const Board = ({ cells, onClick }) => {

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 6rem)",
        justifyContent: "center",
        mt: "100px",
        gap: "10px",
      }}
    >
      {cells.map((value, idx) => {
         return <Boxes key={idx} value={value} onClick={() => value === null && onClick(idx)} />;
      })}
    </Box>
  );
};

export default Board;
