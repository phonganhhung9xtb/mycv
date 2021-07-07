import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Title = ({ title, icon }) => {
    return (
        <div className='title-container'>
            <SvgIcon path={icon} />
            <div><Lang>{title || ''}</Lang></div>
        </div>
    )
}

export default Title