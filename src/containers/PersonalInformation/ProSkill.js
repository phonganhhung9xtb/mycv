import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Skills from '../../components/Skills'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'

const AboutMe = () => {
    return (
        <div className='personal-info-container pro-skills'>
            <Title title='lang_pro_skill' icon={path.mdiTrophy} />
            <Skills data={dataStorage.config.skills} />
        </div>
    )
}

export default AboutMe