import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Title = ({ title, icon }) => {
    return (
        <div className='goal-title-container'>
            <div>
                <div className='triangle-right' />
                <SvgIcon path={icon} />
                <div><Lang>{title || ''}</Lang></div>
            </div>
            <div className='triangle-right' />
        </div>
    )
}

export default Title