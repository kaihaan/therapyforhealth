import React from 'react'
import { StyledContactButton} from './cb.styled'
import { Button } from '../../../components'

// import { useActive } from '../../../context/contact.hook.ts'
import { contactContext } from '../../../context/contact.context.ts'


// adds media queries to disappear on mobile...
export default () => {
    
    //const { setActive } = useActive('Button')
    const { setActive } = React.useContext(contactContext)

    const scrollToContactSection = () => {
        console.log('Set state fired!')
        setActive(true)
    }

    return (

        <StyledContactButton>
            <Button onClick={scrollToContactSection}>Contact</Button>
        </StyledContactButton>
    )
}