import React, { useEffect } from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//API
import { getPerformanceSectionContent} from './API';
//Constants
import { ROUTES_NAMES } from './constants';
//Redux
import { connect } from 'react-redux';
import { getHomeContent } from './Redux/selectors';
import { initPerformanceContent } from './Redux/actions';
//Components
import Header from './components/header';
import Home from './components/home';
import Performance from './components/performance';
import Contact from './components/contact';
import OurMission from './components/performance/ourMission';
import OurMissionItem from './components/performance/ourMission/ourMissionItem'

const App = (props) => {
    const { initPerformanceContent, homeContent } = props;

    useEffect(() => {
        getPerformanceSectionContent()
            .then(res => {
                return initPerformanceContent(res);
            })
            .catch(err => console.log('>>error', err))
    }, [initPerformanceContent]);
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
                        title={'ELITE ATHLETES'}
                        text={homeContent.eliteAthletesText}
                        myClassName={'our-mission-elite'}
                        linkTextOne={'CO-DEVELOPMENT WITH STAFF AND MANAGERS'}
                        linkTextTwo={'EXECUTIVE SUPPORT'}
                        linkToOne={'/co-development'}
                        linkToTwo={'/executive'}
                    />
                </Route>
                <Route exact path={ROUTES_NAMES.CO}>
                    <OurMissionItem
                        title={'CO-DEVELOPMENT WITH MANAGERS AND STAFF'}
                        text={homeContent.coDevelopmentText}
                        myClassName={'our-mission-co'}
                        linkTextOne={'EXECUTIVE SUPPORTS'}
                        linkTextTwo={'ELITE ATHLETES'}
                        linkToOne={'/executive'}
                        linkToTwo={'/elite'}
                    />
                </Route>
                <Route exact path={ROUTES_NAMES.EXECUTIVE}>
                    <OurMissionItem
                        title={'EXECUTIVE SUPPORT'} text={homeContent.executiveSupportText}
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

const mapStateToProps = (state) => ({
    homeContent: getHomeContent(state),
});

const mapDispatchToProps = (dispatch) => ({
    initPerformanceContent: (values) => dispatch(initPerformanceContent(values)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
