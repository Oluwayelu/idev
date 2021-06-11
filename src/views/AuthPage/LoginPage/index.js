import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Tabs from '../../../components/CustomTabs/Tabs';
import GridItem from '../../../components/Grid/GridItem';
import GridContainer from '../../../components/Grid/GridContainer';
import Card from '../../../components/Cards/Card';
import CardBody from '../../../components/Cards/CardBody.js';
import CardHeader from '../../../components/Cards/CardHeader.js';
import CardFooter from '../../../components/Cards/CardFooter.js';
import CustomInput from '../../../components/CustomInput/CustomInput.js';
import CustomButton from '../../../components/CustomButton';

import {
  signInWIthGoogle,
  signInWithGithub,
  signInUser
} from '../../../firebase/auth';

import styles from '../../../assets/js/views/AuthPageStyle/loginPageStyle';
const useStyles = makeStyles(styles);

const LoginPage = () => {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  setTimeout(function() {
    setCardAnimation('');
  }, 700);
  const onChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    signInUser(login.email, login.password);
    e.preventDefault();
  };

  return (
    <div>
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={onSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2 className={classes.title}>Login</h2>
                    <Tabs
                      color="primary"
                      tab={[{ label: 'Client' }, { label: 'Developers' }]}
                    />
                  </CardHeader>
                  <CardBody>
                    <CustomButton
                      block
                      round
                      fullwidth
                      size="lg"
                      color="google"
                      onClick={signInWIthGoogle}
                    >
                      <FcGoogle />
                      Continue with Google
                    </CustomButton>
                    <CustomButton
                      block
                      round
                      fullwidth
                      size="lg"
                      color="github"
                      onClick={signInWithGithub}
                    >
                      <FaGithub />
                      Continue with Github
                    </CustomButton>
                    <hr />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange,
                        type: 'email',
                        name: 'email'
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange,
                        name: 'password',
                        type: 'password',
                        autoComplete: 'off'
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <CustomButton
                      fullWidth
                      color="primary"
                      size="lg"
                      type="submit"
                      onClick={onSubmit}
                    >
                      Login
                    </CustomButton>
                  </CardFooter>
                  <CardFooter>
                    <GridContainer>
                      <GridItem>
                        <span>
                          Don't have an account?{' '}
                          <a className={classes.links} href="/auth/register">
                            Register
                          </a>{' '}
                        </span>
                      </GridItem>
                      <GridItem />
                    </GridContainer>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
