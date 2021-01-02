import React from 'react';
//Constants
import './ourMissionItem/constant';
//Styles
import './ourmissionmobile.scss';
//Components
import { Link } from 'react-router-dom';

const OurMissionMobile = (props) => {
    const { eliteText, developmentText, executiveText } = props;

    return (
        <div className={'our-mission-mobile'}>
            <Link to={'/'} className={'our-mission-item-back-arrow'}>
                <span>&#8249; BACK</span>
            </Link>
            <div className={'our-mission-mobile-elite'}>
              <h1 className={'our-mission-mobile-title'}>ELITE ATHLETES</h1>
                <p className={'our-mission-mobile-text'} dangerouslySetInnerHTML={{__html: eliteText}}/>
              <div className={'first-overlay'} />
            </div>
            <div className={'our-mission-mobile-co'}>
              <h1 className={'our-mission-mobile-title'}>CO-DEVELOPMENT WITH STAFF AND MANAGERS</h1>
              <p className={'our-mission-mobile-text'} dangerouslySetInnerHTML={{__html: developmentText}}/>
              <div className={'second-overlay'} />
            </div>
            <div className={'our-mission-mobile-executive'}>
              <h1 className={'our-mission-mobile-title'}>EXECUTIVE SUPPORT</h1>
              <p className={'our-mission-mobile-text'} dangerouslySetInnerHTML={{__html: executiveText}}/>
              <div className={'third-overlay'} />
            </div>
        </div>
    )
};

export default OurMissionMobile;
