import React from 'react';
import {
    Link
} from 'react-router-dom';
import './ourmission.scss';

const OurMission = () => {
    return(
        <div className={'our-mission-section'} id={'mission'}>
            <div className={'our-mission-white-overlay'}>
                <Link to={'/'} className={'our-mission-back-arrow'}>
                    <span className={'our-mission-span'}>&#8249; BACK</span>
                </Link>
            </div>
            <div className={'our-mission-blue-overlay'}/>
            <div className={'our-mission-red-overlay'}/>
            <div className={'our-mission-text'}>
                <h1 className={'our-mission-title'}>OUR MISSION</h1>
                <Link to={'/elite'} className={'our-mission-links'}>
                    <h2 className={'our-mission-link elite'}>ELITE ATHLETES</h2>
                </Link>
                <Link to={'/co-development'} className={'our-mission-links'}>
                    <h2 className={'our-mission-link co'}>CO-DEVELOPMENT WITH STAFF<br/> AND MANAGER</h2>
                </Link>
                <Link to={'/executive'} className={'our-mission-links'}>
                    <h2 className={'our-mission-link executive'}>EXECUTIVE SUPPORT</h2>
                </Link>
            </div>
        </div>
    )
};

export default OurMission;