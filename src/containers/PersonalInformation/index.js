import React from 'react'
import Name from './Name'
import Avatar from './Avatar'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import FollowMe from './FollowMe'
import ProSkill from './ProSkill'
import PersonalInfo from './PersonalInfo'

const PersonalInformation = () => {
    return (
        <div className='personal-container'>
            <Name />
            <Avatar />
            <AboutMe />
            <PersonalInfo />
            <ContactMe />
            <ProSkill />
        </div>
    )
}

export default PersonalInformation