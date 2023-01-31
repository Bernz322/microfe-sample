import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GradingIcon from "@mui/icons-material/Grading";

const drawerWidth = 210;

const MBODrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box data-testid="sideNav" sx={{ overflow: "auto", width: "200px" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GradingIcon />
              </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default MBODrawer;
