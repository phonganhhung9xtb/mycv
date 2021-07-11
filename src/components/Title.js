import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Title = ({ title, icon, round }) => {
    return (
        <div className='title-container'>
            <div className={`round-icon${round ? ' round-background-icon' : ''}`}>
                <SvgIcon path={icon} />
            </div>
            <div><Lang>{title || ''}</Lang></div>
        </div>
    )
}

export default Title