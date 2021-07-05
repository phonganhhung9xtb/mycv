import React from 'react'
import PersonalInformation from '../PersonalInformation'
import WorkInformation from '../WorkInformation'

const HomePage = () => {
    return (
        <div className='home-container'>
            <PersonalInformation />
            <WorkInformation />
        </div>
    )
}

export default HomePage