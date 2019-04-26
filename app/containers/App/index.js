
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route,Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import FeaturePage from 'containers/FeaturePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import Privacy from 'containers/Privacy/index';
import Notification from 'containers/Notification/index';
import Terms from 'containers/Terms/index';
import Team from 'containers/Team/index';
import Partners from 'containers/Partners/index';
import Footer from 'containers/Footer/index';
import About from 'containers/About/index';
import Partner from 'containers/Partner/index';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import Refund from 'containers/Refund/index';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div style={{background:'#fff'}}>
      <Helmet
        titleTemplate="%s - Zypher"
        defaultTitle="Zypher"
      >
        <meta name="description" content="Zypher -Books on rent" />
      </Helmet>
      {/* <Header /> */}

      
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/team" component={Team} />
        <Route path="/part" component={Partner} />
        <Route path="/refund" component={Refund} />
        <Route path="/terms" component={Terms} />
        <Route path ="/about" component={About} />
        <Route path ="/notification" component={Notification} />
        <Route path="/privacy" component={Privacy} />
        {/* <Route path="/features" component={FeaturePage} /> */}
        <Route path="/partners" component={Partners} />
        
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    
      <Footer />
      <GlobalStyle />
    </div>
  );
}
