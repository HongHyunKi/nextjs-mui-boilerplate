import React from "react";
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";

type NavGroup = {
  id?: number | string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
  disabled?: boolean;
};

interface ItemType {
  item: NavGroup;
  hideMenu?: boolean;
  level?: number;
  pathDirect: string;
}

const NavItem = ({ item, level, pathDirect }: ItemType) => {
  const theme = useTheme();

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      borderRadius: "8px",
      backgroundColor:
        level && level > 1 ? "transparent !important" : "inherit", // level 값을 체크하여 처리
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href || "#"}
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? "_blank" : undefined}
        >
          <ListItemIcon
            sx={{
              minWidth: "36px",
              p: "3px 0",
              color: "inherit",
            }}
          >
            {item?.icon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
