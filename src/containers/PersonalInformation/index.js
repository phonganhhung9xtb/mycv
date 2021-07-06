import React from 'react'
import Name from './Name'
import Avatar from './Avatar'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import FollowMe from './FollowMe'

const PersonalInformation = () => {
    return (
        <div className='personal-container'>
            <Name />
            <Avatar />
            <AboutMe />
            <ContactMe />
            <FollowMe />
        </div>
    )
}

export default PersonalInformation