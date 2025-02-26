"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { SIDEBAR_WIDTH } from "@/app/constants";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import Header from "@/components/layouts/Header/Header";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const SidebarWrapper = styled("div")(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  [theme.breakpoints.down("lg")]: {
    width: 0,
  },
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  backgroundColor: "#F4F7FE", // 임시 색상
  paddingBottom: "84px",
}));

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <MainWrapper>
      <SidebarWrapper>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </SidebarWrapper>
      <PageWrapper>
        <Header toggleSidebar={toggleSidebar} />
        <Container sx={{ maxWidth: "1200px" }}>{children}</Container>
      </PageWrapper>
    </MainWrapper>
  );
}
