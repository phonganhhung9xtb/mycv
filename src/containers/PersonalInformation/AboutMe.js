import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'

const AboutMe = () => {
    return (
        <div className='personal-info-container about-me'>
            <Title title='lang_about_me' icon={path.mdiBookmark} />
            <div className='info-content-long'><Lang>{dataStorage.config.aboutMe}</Lang></div>
            <div style={{ height: 8 }} />
        </div>
    )
}

export default AboutMe