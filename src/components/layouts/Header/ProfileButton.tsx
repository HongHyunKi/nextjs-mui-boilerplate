import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="my profile"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick}
      >
        <Avatar
          // src="/imgs/img_default_profile.png"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon
              sx={{
                color: "text.secondary",
              }}
            />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MailOutlinedIcon
              sx={{
                color: "text.secondary",
              }}
            />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ChecklistOutlinedIcon
              sx={{
                color: "text.secondary",
              }}
            />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>

        <Box mt={1} py={1} px={2}>
          <Button variant="outlined" color="primary" fullWidth>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default ProfileButton;
