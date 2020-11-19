import React from 'react';
import './ourMissionItem.scss'
import {
    Link
} from 'react-router-dom';

const OurMissionItem = (props) => {
  return (
      <div id={props.id} className={`${props.myClassName} our-mission-container`}>
          <div className={'our-mission-item-wrapper'}>
              <h1 className={'our-mission-item-title'}>{props.title}</h1>
              <p className={'our-mission-item-text'}>{props.text}</p>
          </div>
          <div className={'our-mission-item-link-wrapper'}>
              <Link to={props.linkToOne}>
                  <h2 className={'our-mission-item-link-one'}>{props.linkTextOne}</h2>
              </Link>
              <Link to={props.linkToTwo}>
                  <h2 className={'our-mission-item-link-two'}>{props.linkTextTwo}</h2>
              </Link>
          </div>
          <div className={'our-mission-item-first-overlay'} />
          <div className={'our-mission-item-second-overlay'} />
      </div>
  )
};

export default OurMissionItem

