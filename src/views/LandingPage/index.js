import React, { useState } from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/js/views/LandingPageStyle';

import Navbar from '../../components/Navbar';
import NavLeftLinks from '../../components/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButton';
import NavRightLinks from '../../components/Navbar/NavRightLink';
// import Footer from '../../components/Footer/Footer';
// import Modal from '../../components/Modal/Modal';
// import CreateProject from '../../components/Project/CreateProject';

// //Sections of Landing page
// import ProductSection from './Sections/ProductSection';
// import WorkSection from './Sections/WorkSection';
// import TestimoniesSection from './Sections/TestimoniesSection';
// import BlogSection from './Sections/BlogSection';

import image from '../../assets/img/img2.jpg';

const useStyles = makeStyles(styles);
const LandingPage = props => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navbar
        color="transparent"
        routes={[]}
        brand="iDev"
        leftLinks={<NavLeftLinks />}
        rightLinks={<NavRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'dark'
        }}
      />
      <Parallax filter small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>Demo</h4>
              <br />
              <Button href="/auth/login" color="primary" size="lg">
                Join Us
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
