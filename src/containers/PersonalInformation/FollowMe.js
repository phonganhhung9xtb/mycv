import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Info from '../../components/Info'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'

const FollowMe = () => {
    return (
        <div className='personal-info-container'>
            <Title title='lang_follow_me' />
            {
                dataStorage.config.facebook ? <Info
                    path={path.mdiAlert}
                    link
                    content={dataStorage.config.facebook}
                /> : null
            }
            {
                dataStorage.config.youtube ? <Info
                    path={path.mdiAlert}
                    link
                    content={dataStorage.config.youtube}
                /> : null
            }
            {
                dataStorage.config.tiktok ? <Info
                    path={path.mdiAlert}
                    link
                    content={dataStorage.config.tiktok}
                /> : null
            }
        </div>
    )
}

export default FollowMe