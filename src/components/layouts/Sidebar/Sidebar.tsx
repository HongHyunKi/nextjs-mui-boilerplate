"use client";
import * as React from "react";
import { Drawer, Theme } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import { SIDEBAR_WIDTH } from "@/app/constants";
import SidebarItems from "@/components/layouts/Sidebar/SidebarItems";

// Custom CSS for short scrollbar
const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "7px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#eff2f7",
    borderRadius: "15px",
  },
};

type SidebarProps = {
  sidebarOpen: boolean;
  closeSidebar: () => void;
};

export default function Sidebar({ sidebarOpen, closeSidebar }: SidebarProps) {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Drawer
      anchor="left"
      open={lgUp ? true : sidebarOpen}
      variant={lgUp ? "persistent" : "temporary"}
      onClose={closeSidebar}
      PaperProps={{
        sx: {
          padding: "12px 24px",
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          ...scrollbarStyles,
        },
      }}
    >
      <SidebarItems />
    </Drawer>
  );
}
