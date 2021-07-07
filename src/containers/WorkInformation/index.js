import React from 'react'
import Name from '../PersonalInformation/Name'
import AboutMe from '../PersonalInformation/AboutMe'
import ProSkill from '../PersonalInformation/ProSkill'

const WorkInformation = () => {
    return (
        <div className='work-container'>
            <Name />
            <AboutMe />
            <ProSkill />
        </div>
    )
}

export default WorkInformation