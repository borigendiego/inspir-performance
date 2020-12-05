import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//Constants
import { ROUTES_NAMES } from './constants';
import { ELITE_TEXT, DEVELOPMENT_TEXT, EXECUTIVE_TEXT } from './components/performance/ourMission/ourMissionItem/constant'
//Components
import Header from './components/header';
import Home from './components/home';
import Performance from './components/performance';
import Contact from './components/contact';
import OurMission from './components/performance/ourMission';
import OurMissionItem from './components/performance/ourMission/ourMissionItem'

function App() {
  return (
    <div className='App'>
        <Router>
            <Switch>
                <Route exact path={ROUTES_NAMES.ROOT}>
                    <Header />
                    <Home />
                    <Performance />
                    <Contact />
                </Route>
                <Route path={ROUTES_NAMES.MISSION}>
                    <OurMission />
                </Route>
                <Route exact path={ROUTES_NAMES.ELITE}>
                    <OurMissionItem
                        title={'ELITE ATHLETES'} text={ELITE_TEXT}
                        myClassName={'our-mission-elite'}
                        linkTextOne={'CO-DEVELOPMENT WITH STAFF AND MANAGERS'}
                        linkTextTwo={'EXECUTIVE SUPPORT'}
                        linkToOne={'/co-development'}
                        linkToTwo={'/executive'}
                    />
                </Route>
                <Route exact path={ROUTES_NAMES.CO}>
                    <OurMissionItem
                        title={'CO-DEVELOPMENT WITH MANAGERS AND STAFF'} text={DEVELOPMENT_TEXT}
                        myClassName={'our-mission-co'}
                        linkTextOne={'EXECUTIVE SUPPORTS'}
                        linkTextTwo={'ELITE ATHLETES'}
                        linkToOne={'/executive'}
                        linkToTwo={'/elite'}
                    />
                </Route>
                <Route exact path={ROUTES_NAMES.EXECUTIVE}>
                    <OurMissionItem
                        title={'EXECUTIVE SUPPORT'} text={EXECUTIVE_TEXT}
                        myClassName={'our-mission-executive'}
                        linkTextOne={'ELITE ATHLETES'}
                        linkTextTwo={'CO-DEVELOPMENT WITH STAFF AND MANAGERS'}
                        linkToOne={'/elite'}
                        linkToTwo={'/co-development'}
                    />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
