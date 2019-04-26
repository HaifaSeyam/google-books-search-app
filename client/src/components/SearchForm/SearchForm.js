import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, IconButton, InputBase, Divider } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import "./SearchForm.css"

const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: 600,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    }
  };

function SearchForm(props) {

    const { classes } = props;

  return (
    <Grid container justify="center">
        <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder="Search Google Books" />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    </Grid>     
  );
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SearchForm);
