import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Info from '../../components/Info'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'

const PersonalInfo = () => {
    return (
        <div className='personal-info-container'>
            <Title title='lang_personal_info' icon={path.mdiAccount} />
            <Info
                path={path.mdiCakeVariant}
                content={dataStorage.config.dob}
            />
            <Info
                path={path.mdiMapMarker}
                translate
                content={dataStorage.config.country}
            />
            <Info
                path={path.mdiHeart}
                translate
                content={dataStorage.config.relationship}
            />
        </div>
    )
}

export default PersonalInfo