import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Button } from "@mui/material";

const Boxes = ({ value, onClick }) => {
  return (
    <div>
      <Button
        // disableRipple
        onClick={onClick}
        sx={{
          width: "5rem",
          height: "5rem",
          boxShadow: "0 0 8px #ddd",
          backgroundColor: "#e5e5e5",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {value === "X" ? (
          <CloseIcon />
        ) : value === "O" ? (
          <CircleOutlinedIcon />
        ) : null}
      </Button>
    </div>
  );
};

export default Boxes;
