import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const Header = () => {
    // State for managing menu anchor
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Function to handle opening menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your Logo
                </Typography>
                
                {/* Menu */}
                <div>
                    {/* Menu Button */}
                    <Button
                        aria-controls="menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        Menu
                    </Button>
                    {/* Menu Items */}
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Price</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;