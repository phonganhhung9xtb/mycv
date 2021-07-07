import React from 'react'
import SvgIcon, { path } from './Icons'
import Lang from './Lang'

const Progress = ({ percent }) => {
    return (
        <div className='progress-container'>
            <div style={{ width: `${percent}%` }} />
        </div>
    )
}

const Skill = ({ data }) => {
    return (
        <div className='skill-container'>
            <div className='list-bullet' />
            <div style={{ width: 8 }} />
            <div className='skill-label'>{data.label}</div>
            <Progress percent={data.value} />
        </div>
    )
}

const Skills = ({ data = [] }) => {
    return (
        <div className='skills-container'>
            {
                data.map((e, i) => {
                    if (!e.label) return null
                    return <Skill key={`skill_${e.label || i}`} data={e} />
                })
            }
        </div>
    )
}

export default Skills