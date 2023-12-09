import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
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
import PerformanceMobile from './components/performance/performanceMobile';
import OurMissionMobile from './components/performance/ourMission/ourMissionMobile';


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
        {/*
            <Router>
                        <Routes>
                            <Route exact path={ROUTES_NAMES.ROOT}>
                                <Header />
                                <Home />
                                <Performance />
                                <PerformanceMobile />
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
                            <Route exact path={ROUTES_NAMES.MISSION_MO}>
                                <OurMissionMobile
                                    eliteText={homeContent.eliteAthletesText}
                                    developmentText={homeContent.coDevelopmentText}
                                    executiveText={homeContent.executiveSupportText}
                                />
                            </Route>
                        </Routes>
                    </Router>
        */}
        <div className={'under-construction'}>
            <div className={'content-wrapper'}>
                <div className={'text-wrapper'}>
                    <img src={'/assets/under_c_logo.png'} alt={'Under construction'} style={{marginBottom: 30}} />
                    <h5 style={{marginBottom: 10}}>Website is</h5>
                    <h4 style={{marginBottom: 10}}>UNDER CONSTRUCTION</h4>
                    <p style={{marginBottom: 20}}>We are renewing ourselves. We will be back soon!</p>
                    <h6>
                        <a href={'mailto:bregnier@inspirperformance.com'}>
                            bregnier@inspirperformance.com
                        </a>
                    </h6>
                </div>
                <img className={'illustration'} src={'/assets/under_c_illustration.png'} alt={'Under construction'} />
            </div>
        </div>
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
