import React, { useRef } from 'react'
import { StyledSection, StyledSectionDiv } from './section.styled'
import woods from '../../../assets/woods.mp4'
import pleaseWait from '../../../assets/images/loading-please-wait.jpg'
import { useActive } from '../../../context/contact.hook.tsx'


const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop, left: 0, behavior: 'smooth'})
// General scroll to element function


export default ({ useDiv, video, children, background, scrollTarget, activeState, setActive }) => {


    const sectionRef = useRef(null)
    const executeScroll = () => scrollToRef(sectionRef)


    // useEffect(()=>{
    //     if(activeState && (scrollTo==='contactForm')) {
    //         console.log('Section Triggered')
    //         executeScroll()
    //         setActive(false)
    //     }

    // },[activeState, setActive, scrollTo])


    if (activeState && scrollTarget==='contactForm') {
        console.log('Section Triggered')
        console.log(sectionRef)
        console.dir(typeof(sectionRef))
        executeScroll()
    }


    let videoMarkup
    let markup

    if (video) {
        videoMarkup = (
            <div className="video">
                <video playsInline autoPlay muted loop poster={pleaseWait} id="bgvid">
                    <source src={woods} type="video/mp4" />
                </video>
            </div>
        )
    }

    if (useDiv) {
        markup = (
            <StyledSectionDiv background={background} >
                {videoMarkup}
                {children}
            </StyledSectionDiv >
        )
    } else {
        markup = (
            <StyledSection background={background} >
                {videoMarkup}
                {children}
            </StyledSection >
        )
    }

    return (
        <div ref={sectionRef} >
            {markup}
        </div>
    )
}
