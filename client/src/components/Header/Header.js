import React from "react";
import { Link } from "react-router-dom";
import { Typography, Toolbar, AppBar, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h3" color="inherit">
                Google Books
            </Typography>
            <Tabs>
                <Tab value={0} label="Serach" to='/' component={Link}/>
                <Tab value={1} label="Saved" to='/Saved' component={Link}/>
            </Tabs>
        </Toolbar>
    </AppBar>
  );
}

export default Header;
