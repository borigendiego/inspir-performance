import React from 'react';
import business from '../../assets/images/business.png';
import sports from '../../assets/images/sport.png';
import './performanceMobile.scss'

const PerformanceMobile = () => {
    return (
        <div className={'performance-mobile'}>
            <div className={'performance-mobile-sport'}>
                <h1 className={'performance-mobile-title'}>SPORT PERFORMANCE</h1>
                <h3 className={'performance-mobile-subtitle'}>Performance and optimisator for elite athletes and teams</h3>
                <p className={'performance-mobile-text'}>We provide innovative and effective solution to increase
                    the potential on every
                    professional athletes. As elite performance experts, we are helping top athletes and
                    executives in competitive fields unlock the power of the mind and create the mental
                    toughness to be performant We are collaborating with managers and staff members in
                    addition to our research to provide an innovantive and efficient solution for
                    our partnerships</p>
                <div className={'overlay-red'} />
            </div>
            <div className={'performance-mobile-business'}>
                <h1 className={'performance-mobile-title'}>BUSINESS PERFORMANCE</h1>
                <h3 className={'performance-mobile-subtitle'}>Performance optimisation for business head,
                    elite manager and
                    executive.</h3>
                <p className={'performance-mobile-text'}>We analyse and diagnose performance situations in order
                    to offer to the Executives
                    a solution adapted to this situation. INSPIR PERFORMANCE is a combination of
                    knowledge and experience to offer a suitable mental training program for Business,
                    Executive and professional sports organisation. Unlock your performance potential
                    and the performance of everyone in the business can change an organisation!</p>
                <div className={'overlay-red'} />
            </div>
        </div>
    )
};

export default PerformanceMobile;