/*eslint-disable*/
import React from 'react';
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

const NavRightLinks = props => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="joinus-tooltip"
          title="Join Us Today"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
        >
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
        </Tooltip>
      </ListItem>
    </List>
  );
};

export default NavRightLinks;
