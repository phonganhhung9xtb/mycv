import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Info from '../../components/Info'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'

const ContactMe = () => {
    return (
        <div className='personal-info-container'>
            <Title title='lang_contact_me' icon={path.mdiPhone} />
            <Info
                path={path.mdiCellphoneBasic}
                content={dataStorage.config.phone}
            />
            <Info
                path={path.mdiEmail}
                content={dataStorage.config.email}
            />
            <Info
                path={path.mdiHome}
                translate
                content={dataStorage.config.address}
            />
        </div>
    )
}

export default ContactMe