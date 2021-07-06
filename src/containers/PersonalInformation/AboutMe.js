import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Lang from '../../components/Lang'

const AboutMe = () => {
    return (
        <div className='personal-info-container'>
            <Title title='lang_about_me' />
            <div className='info-content'><Lang>{dataStorage.config.aboutMe}</Lang></div>
        </div>
    )
}

export default AboutMe