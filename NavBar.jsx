import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Translate as TranslateIcon, Settings as SettingsIcon, History as HistoryIcon, Help as HelpIcon, Info as InfoIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
          <MenuItem component={Link} to="/translate" onClick={handleClose}>
            <TranslateIcon sx={{ mr: 1 }} /> Translator
          </MenuItem>
          <MenuItem component={Link} to="/settings" onClick={handleClose}>
            <SettingsIcon sx={{ mr: 1 }} /> Settings
          </MenuItem>
          <MenuItem component={Link} to="/history" onClick={handleClose}>
            <HistoryIcon sx={{ mr: 1 }} /> History
          </MenuItem>
          <MenuItem component={Link} to="/tutorial" onClick={handleClose}>
            <HelpIcon sx={{ mr: 1 }} /> Tutorial
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleClose}>
            <InfoIcon sx={{ mr: 1 }} /> About
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sign Language Translator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;