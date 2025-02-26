import React from "react";
import { usePathname } from "next/navigation";
import { List } from "@mui/material";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import FormatSizeOutlinedIcon from "@mui/icons-material/FormatSizeOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import NavGroup from "@/components/layouts/Sidebar/NavGroup";
import NavItem from "@/components/layouts/Sidebar/NavItem";

type MenuItem = {
  id?: number;
  title?: string;
  icon?: React.ReactNode;
  href?: string;
  navlabel?: boolean;
  subheader?: string | undefined;
};

/* Sidebar 메뉴 변경 시 이 부분 수정 */
const MENU_ITEMS: MenuItem[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: 1,
    title: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: 2,
    title: "Typography",
    icon: <FormatSizeOutlinedIcon />,
    href: "/utilities/typography",
  },
  {
    id: 3,
    title: "Card",
    icon: <ViewAgendaOutlinedIcon />,
    href: "/utilities/card",
  },
];

const SidebarItems = () => {
  const pathDirect = usePathname();

  return (
    <List sx={{ pt: 0 }} className="sidebarNav" component="div">
      {MENU_ITEMS.map((item) => {
        if (item?.subheader) {
          return <NavGroup item={item} key={item?.subheader} />;
        } else {
          return <NavItem item={item} key={item?.id} pathDirect={pathDirect} />;
        }
      })}
    </List>
  );
};

export default SidebarItems;
