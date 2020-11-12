import React, { useState } from 'react';
import './performance.scss';

const Performance = () => {
    const [isLeftHover, setIsLeftHover] = useState(false);
    const [isRightHover, setIsRightHover] = useState(false);

    return(
        <div className={'performance-section'}>
                <div className={'items-wrapper'}>
                    <div
                        className={`${isRightHover ? 'performance-items hide-section item-one' : 'performance-items item-one'}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <h2 className={'performance-item-title-left'}>SPORT PERFORMANCE</h2>
                    </div>
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
                            <h4 className="red-background-title">Performance optimisator<br/>For elite athletes
                                and teams</h4>
                            <p className={'red-background-text'}>We provide innovative and effective solution to increase
                                the potential on every
                                professional athletes. As elite performance experts, we are helping top athletes and
                                executives in competitive fields unlock the power of the mind and create the mental
                                toughness to be performant We are collaborating with managers and staff members in
                                addition to our research to provide an innovantive and efficient solution for
                                our partnerships</p>
                        </div>
                        <div className={'red-background-content-right hide-section'}>
                            <h4 className="red-background-title">Performance optimisation<br/>For business head,
                                elite manager and
                                executive.</h4>
                            <p className={'red-background-text'}>We analyse and diagnose performance situations in order
                                to offer to the Executives
                                a solution adapted to this situation. INSPIR PERFORMANCE is a combination of
                                knowledge and experience to offer a suitable mental training program for Business,
                                Executive and professional sports organisation. Unlock your performance potential
                                and the performance of everyone in the business can change an organisation!</p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Performance