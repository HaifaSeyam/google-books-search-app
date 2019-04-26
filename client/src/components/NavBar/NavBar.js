import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Toolbar, AppBar, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

function NavBar() {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h3" color="inherit">
                Google Books
            </Typography>
            <Tabs value={0}>
                <Tab label="Serach" to='/' component={Link}/>
                <Tab label="Saved" to='/Saved' component={Link}/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default NavBar;