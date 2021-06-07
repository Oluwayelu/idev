/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
//import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from '../../assets/js/components/headerLinkStyle';
import Button from '../CustomButton';

const useStyles = makeStyles(styles);

const NavLeftLinks = props => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" color="transparent" className={classes.navLink}>
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/services"
          color="transparent"
          className={classes.navLink}
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/blog"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" color="transparent" className={classes.navLink}>
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/contact" color="transparent" className={classes.navLink}>
          Contact
        </Button>
      </ListItem>
      <Button
        block
        round
        fullwidth
        size="lg"
        href="/auth/login"
        color="primary"
      >
        Join Us
      </Button>
    </List>
  );
};

export default NavLeftLinks;
