import {
  defaultFont,
  grayColor,
  whiteColor,
  infoColor,
  primaryColor,
  secondaryColor
} from '../styles';

import tooltip from './tooltipsStyle';

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit'
  },
  listItem: {
    float: 'left',
    color: primaryColor,
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  },
  listItemText: {
    padding: '0 !important'
  },
  navLink: {
    color: primaryColor,
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: grayColor
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start'
      }
    }
  },
  btnLink: {
    color: whiteColor,
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '5px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: whiteColor
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start'
      }
    }
  },
  notificationNavLink: {
    color: infoColor,
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    top: '4px'
  },
  registerNavLink: {
    top: '3px',
    position: 'relative',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex'
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  icons: {
    width: '20px',
    height: '20px',
    color: 'inherit',
    marginRight: '3px'
  },
  socialIcons: {
    color: 'inherit',
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px'
  },
  dropdownLink: {
    '&,&:hover,&:focus': {
      color: secondaryColor,
      textDecoration: 'none',
      display: 'block',
      padding: '10px 20px'
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: '5px'
  }
});

export default headerLinksStyle;
