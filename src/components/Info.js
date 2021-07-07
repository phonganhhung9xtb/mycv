import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Info = ({ path, subContent, content, translate, link }) => {

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
                subContent ? <div className='info-subcontent'>{translate ? <Lang>{subContent}</Lang> : subContent}&nbsp;</div> : null
            }
            {
                Array.isArray(content) ? <div className='info-content-array'>
                    {
                        content.map((e, i) => <div className='info-content' key={`info_item_${i}`}>{e}</div>)
                    }
                </div> : <div className='info-content'>{translate ? <Lang>{content}</Lang> : content}</div>
            }
        </div>
    )
}

export default Info