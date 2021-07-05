import React from 'react'
import Lang from '../../components/Lang'
import dataStorage from '../..//dataStorage'

const Name = () => {
    return (
        <>
            <div className='name-container'>
                <div className='name'><Lang>{dataStorage.config.name}</Lang></div>
                <div className='job'><Lang>{dataStorage.config.job}</Lang></div>
            </div>
        </>
    )
}

export default Name