"use client";
import * as React from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";
import { HEADER_HEIGHT } from "@/constants";
import ProfileButton from "@/components/layouts/Header/ProfileButton";
import ThemeModeSwitch from "@/components/common/ThemeModeSwitch";

interface HeaderProps {
  toggleSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <Box
      px={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: HEADER_HEIGHT,
      }}
    >
      {/* 모바일 sidebar open */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ display: { xs: "inline", lg: "none" } }}
        >
          <MenuIcon sx={{ color: "text.secondary" }} />
        </IconButton>
      </Box>

      <Stack spacing={1} direction="row" alignItems="center">
        <ThemeModeSwitch />
        <ProfileButton />
      </Stack>
    </Box>
  );
}
