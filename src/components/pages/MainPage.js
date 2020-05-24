import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Home from './Home';
import Methodology from './Methodology';
import DataRoom from './DataRoom';
import Header from './Header';

import {
  HOME,
  DATA_PAGE,
  METHODOLOGY
} from '../../constants/router_endpoints';




class MainPage extends React.Component {
  constructor(_props) {
    super();
    this.props = _props
  }


  render() {
    return (
      <div>
        <Header links={[HOME, DATA_PAGE, METHODOLOGY]} />

        <Switch>
          <Route path={ DATA_PAGE.href }>
            <DataRoom />
          </Route>
          <Route path={METHODOLOGY.href}>
            <Methodology />
          </Route>
          <Route path={ HOME.href }>
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default MainPage;
