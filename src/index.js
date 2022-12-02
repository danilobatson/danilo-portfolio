import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import './assets/css/nucleo-icons.css';
import './assets/scss/blk-design-system-react.scss';
import './assets/demo/demo.css';

import ProfilePage from './ProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' render={(props) => <ProfilePage {...props} />} />
    </Switch>
  </BrowserRouter>
);
