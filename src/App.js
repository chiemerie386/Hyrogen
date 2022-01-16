import logo from './logo.svg';
import './App.css';
import {useCookies} from 'react-cookie'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

function App() {
  const [Token, setToken] = useCookies(['UserToken',])
   let token = Token.UserToken
  return (
  <Router>
      <Switch>
          <Route path='/login'>
              {token ?  <Redirect to="/dashboard" /> :  <Login />}
          </Route>
          <Route path='/dashboard'>
                {token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
