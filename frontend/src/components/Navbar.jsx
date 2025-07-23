

import React, { useState, useEffect } from 'react';
import {
  Box, AppBar, Toolbar, IconButton, Typography,
  Button, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userLoggedIn');
    const admin = localStorage.getItem('adminLoggedIn');
    setIsLoggedIn(!!user || !!admin);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload(); // ✅ Refresh app state completely
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Hamburger Menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Doctor Appointment
          </Typography>

          {/* Right Side Buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {!isLoggedIn ? (
              <>
                <Link to="/">
                  <Button color="inherit" variant="contained">Home</Button>
                </Link>
                <Link to="/login">
                  <Button color="inherit" variant="contained">Login</Button>
                </Link>
                {/* <Link to="/signup">
                  <Button color="inherit" variant="contained">Signup</Button>
                </Link> */}
                <Link to="/dashboard">
                  {/* <Button color="inherit" variant="contained">Register</Button> */}
                  <Button
  size="medium"
  color="inherit"
  variant="contained"
  onClick={() => {
   const handleRegisterClick = () => {
  const user = localStorage.getItem("loggedInUserName");
  if (!user) {
    alert("Please login or signup first.");
    navigate('/');
    window.location.reload(); // ✅ ensure reload
  } else {
    navigate('/dashboard');
  }
};
  }}>
   Register
</Button>

                </Link>
                <Link to="/about">
                  <Button color="inherit" variant="contained">About</Button>
                </Link>
             
              </>
            ) : (
              <Box>
              <Button color="inherit" variant="contained" onClick={handleLogout}>
                Logout
              </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/admin/login">
              <ListItemText primary="Admin" />
            </ListItem>

            {isLoggedIn && (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;


