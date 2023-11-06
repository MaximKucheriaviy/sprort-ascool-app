import handler from "@/pages/api/hello";
import { Button, Menu } from "@mui/material";
import { useState } from "react";

export const KlickMenu = ({ buttonText, children }) => {
  const [ancorEl, setAncorEl] = useState(null);
  const openHandler = ({ currentTarget }) => {
    setAncorEl(currentTarget);
  };
  const closeHandler = () => {
    setAncorEl(null);
  };
  return (
    <>
      <Button onClick={openHandler} color="white">
        {buttonText}
      </Button>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClick={closeHandler}
        anchorEl={ancorEl}
        open={Boolean(ancorEl)}
      >
        {children}
      </Menu>
    </>
  );
};
