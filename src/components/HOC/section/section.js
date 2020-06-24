import React from 'react'
import { StyledSection } from './section.styled'
import PropTypes from 'prop-types'
import woods from '../../../assets/woods.mp4' 

const Section = ({ background, children, video }) => {

    let videoMarkup

    if (video) {
        videoMarkup = (
            <div className="video">
            <video playsInline autoPlay muted loop poster="../../../assets/loading-please-wait.jpg" id="bgvid">
                <source src={woods} type="video/mp4" />
            </video>
            </div>
        )
    }




    return (
        <StyledSection background={background}>
            {videoMarkup}
            {children}
        </StyledSection>
    )
}

Section.propTypes = {
    background: PropTypes.string.isRequired
}

export default Section
