import './styles.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import React from "react"
import { Router, Route, Switch } from 'react-router-dom';

import 'firebaseui/dist/firebaseui.css';

import LandingPage from './views/LandingPage';
import AboutPage from './views/AboutPage';
import TermsPage from './views/TermsPage';
import LoginPage from './views/AuthPage/LoginPage';
import RegisterPage from './views/AuthPage/RegisterPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c'
    }
  }
});

const hist = createBrowserHistory();
export default function App() {
  return (
    <Router history={hist}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={RegisterPage} />
          <Route path="/terms&cond" component={TermsPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
