import React from 'react'
import Name from '../PersonalInformation/Name'
import AboutMe from '../PersonalInformation/AboutMe'
import ProSkill from '../PersonalInformation/ProSkill'
import Education from './Education'
import Experience from './Experience'

const WorkInformation = () => {
    return (
        <div className='work-container'>
            <Name />
            <AboutMe />
            <ProSkill />
            <Education />
            <Experience />
        </div>
    )
}

export default WorkInformation