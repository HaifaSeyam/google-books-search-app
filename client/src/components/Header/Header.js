import React from "react";
import { Typography, Toolbar, AppBar, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h3" color="inherit">
                Google Books
            </Typography>
            <Tabs value = {0} >
                <Tab label="Serach" />
                <Tab label="Saved" />
            </Tabs>
        </Toolbar>
    </AppBar>
  );
}

export default Header;
