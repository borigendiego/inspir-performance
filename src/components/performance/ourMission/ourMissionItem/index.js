import React from 'react';
import './ourMissionItem.scss'
import {
    Link
} from 'react-router-dom';

const OurMissionItem = (props) => {
    const { myClassName, title, text, linkTextOne, linkToOne, linkTextTwo, linkToTwo } = props;

    return (
        <div id={props.id} className={`${myClassName} our-mission-container`}>
            <div className={'our-mission-item-wrapper'}>
              <h1 className={'our-mission-item-title'}>{title}</h1>
              <p className={'our-mission-item-text'} dangerouslySetInnerHTML={{__html: text}} />
            </div>
            <div className={'our-mission-item-link-wrapper'}>
              <Link to={'/mission'} className={'our-mission-item-back-arrow'}>
                  <span>&#8249; BACK</span>
              </Link>
              <Link to={linkToOne} className={'our-mission-item-links'}>
                  <h2 className={'our-mission-item-link-one'}>{linkTextOne}</h2>
              </Link>
              <Link to={linkToTwo} className={'our-mission-item-links'}>
                  <h2 className={'our-mission-item-link-two'}>{linkTextTwo}</h2>
              </Link>
            </div>
            <div className={'our-mission-item-first-overlay'} />
            <div className={'our-mission-item-second-overlay'} />
        </div>
    )
};

export default OurMissionItem

