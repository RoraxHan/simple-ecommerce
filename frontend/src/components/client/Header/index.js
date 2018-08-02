import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, Toolbar, IconButton, Typography, Button, Badge,
} from '@material-ui/core';
import { ShoppingCart, Info, Comment, AddShoppingCart } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    margin: '5px',
  },
  badge: {
    top: -10,
    right: -15,
    fontSize: '10px', 
    border: `1px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '90%',
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className = {classes.appbar}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" className={classes.flex}>
              bugkiller
            </Typography>
            <Button color="inherit" component={NavLink} to="/">Home</Button>
            <Button color="inherit" component={NavLink} to="/shop">Shop</Button>
            
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign up</Button>

            <IconButton color="inherit" component={NavLink} to="/cart">
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ShoppingCart></ShoppingCart>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default withStyles(styles)(Header);