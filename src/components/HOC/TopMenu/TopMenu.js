import React, {useState} from 'react'
import { StyledTopMenu } from './top-menu.styled'
import { Burger, Contact, SideMenu} from '../../../components'

const TopMenu = () => {

    const [open, setOpen] = useState(false);

    return (
        <StyledTopMenu>
            <Burger open={open} setOpen={setOpen} />
             <span><h1>Therapy for Health</h1></span> 
            <Contact />
            <SideMenu open={open} setOpen={setOpen} />
        </StyledTopMenu>
    )
}

TopMenu.propTypes = {
}

export default TopMenu