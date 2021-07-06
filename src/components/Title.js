import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Title = ({ title }) => {
    return (
        <div className='title-container'>
            <SvgIcon path={path.mdiAccount} />
            <div><Lang>{title || ''}</Lang></div>
        </div>
    )
}

export default Title