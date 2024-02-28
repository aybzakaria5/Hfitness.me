import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Footer Content
        </Typography>
        <Button color="inherit">Link 1</Button>
        <Button color="inherit">Link 2</Button>
        {/* Add more buttons or links as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default Footer;