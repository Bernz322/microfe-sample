import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";

const MBOAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="relative" sx={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap component="div">
          Time goes here
        </Typography>
        <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }} data-testid="avatar">
          <Tooltip title="Notifications">
            <IconButton onClick={handleOpenNotifications} sx={{ p: 0 }}>
              <NotificationsIcon style={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="avatar-menu"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseNotifications}
          >
            <MenuItem>
              <Typography textAlign="center">
                Notifications goes here
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MBOAppBar;
