"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeModeSwitch() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <FormControl>
        <Select
          labelId="mode-select-label"
          id="mode-select"
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as "light" | "dark" | "system")
          }
          sx={{ height: "36px" }}
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
