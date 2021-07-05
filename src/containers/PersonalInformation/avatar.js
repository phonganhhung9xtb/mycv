import React from 'react'
import Lang from '../../components/Lang'
import dataStorage from '../..//dataStorage'

const Avatar = () => {
    return (
        <div className='avatar-container'>
            <div className='avatar-bounder'>
                <img src={dataStorage.config.avatar} alt='' ></img>
            </div>
        </div>
    )
}

export default Avatar