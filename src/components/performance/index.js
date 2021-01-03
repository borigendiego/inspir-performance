import React, { useState, useEffect } from 'react';
import {
    Link
} from 'react-router-dom';
//Style
import './performance.scss';
//Constants
import { ROUTES_NAMES } from '../../constants'
//API
import { getHomePageContent } from '../../API';
//Redux
import { connect } from 'react-redux';
import { getHomeContent } from '../../Redux/selectors';
import { initHomeContent } from '../../Redux/actions';
//Images
import business from '../../assets/images/business.png';
import sports from '../../assets/images/sport.png';

const Performance = (props) => {
    const { initHomeContent, homeContent } = props;
    const [isLeftHover, setIsLeftHover] = useState(false);
    const [isRightHover, setIsRightHover] = useState(false);

    useEffect(() => {
        getHomePageContent()
            .then(res => {
                return initHomeContent(res);
            })
            .catch(err => console.log('>>error', err))
    }, [initHomeContent]);

    return(
        <div className={'performance-section'} id={'performance'} style={isRightHover ? {backgroundImage: business} : {backgroundImage: sports}}>
            <div className={'items-wrapper'}>
                <Link to={ROUTES_NAMES.MISSION}>
                    <div
                        className={`${isRightHover ? 'performance-items hide-section item-one' : 'performance-items item-one'}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <h2 className={'performance-item-title-left'}>SPORT PERFORMANCE</h2>
                    </div>
                </Link>
                <div
                    className={`${isLeftHover ? 'performance-items hide-section item-two' : 'performance-items item-two'}`}
                    onMouseEnter={() => setIsRightHover(true)}
                    onMouseLeave={() => setIsRightHover(false)}
                >
                    <h2 className={'performance-item-title-right'}>BUSINESS PERFORMANCE</h2>
                </div>
                <div className={isRightHover ? 'red-background move-left ' : isLeftHover ?
                    'red-background move-right' : 'red-background' }>
                    <div className={'red-background-content-left hide-section'}>
                        <h4 className={'red-background-title'}>
                            Performance optimisator<br/>For elite athletes
                            and teams
                        </h4>
                        <p className={'red-background-text'}>
                            {homeContent.performanceText}
                        </p>
                    </div>
                    <div className={'red-background-content-right hide-section'}>
                        <h4 className={'red-background-title'}>Performance optimisation<br/>For business head,
                            elite manager and
                            executive.</h4>
                        <p className={'red-background-text'}>
                            {homeContent.businessText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    homeContent: getHomeContent(state),
});

const mapDispatchToProps = (dispatch) => ({
    initHomeContent: (values) => dispatch(initHomeContent(values)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Performance)