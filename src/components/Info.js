import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Info = ({ path, content, translate, link }) => {

    if (link) {
        return (
            <div className='info-container'>
                <SvgIcon path={path} />
                <a className='info-content' href={content}>{content}</a>
            </div>
        )
    }
    return (
        <div className='info-container'>
            <SvgIcon path={path} />
            {
                Array.isArray(content) ? <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {
                        content.map((e, i) => <div className='info-content' key={`info_item_${i}`}>{e}</div>)
                    }
                </div> : <div className='info-content'>{translate ? <Lang>{content}</Lang> : content}</div>
            }
        </div>
    )
}

export default Info