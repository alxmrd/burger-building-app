import * as React from "react";
import Button from "@mui/material/Button";

export default function Logout() {
  function handleClick(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      Logout
    </Button>
  );
}
