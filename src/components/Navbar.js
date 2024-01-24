import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" textAlign="justify" sx={{ flexGrow: 1 }}>
          Test App Name
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
        {/* Add more buttons as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
