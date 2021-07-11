import React from 'react'
import dataStorage from '../../dataStorage'
import Title from '../../components/Title'
import Divider from '../../components/Divider'
import Lang from '../../components/Lang'
import { path } from '../../components/Icons'
import moment from 'moment'

const School = ({ school, begin, end }) => {
    return (
        <div className='school-container'>
            <div className='list-bullet big-list-bullet' />
            <div style={{ width: 32 }} />
            <div className='school-name'><Lang>{school || ''}</Lang></div>
            <div style={{ width: 16 }} />
            <div className='school-year'>{`${moment(begin).format('MMM YYYY')} - ${moment(end).format('MMM YYYY')}`}</div>
        </div>
    )
}

const Major = ({ major }) => {
    return (
        <div className='school-container'>
            <div style={{ width: 40 }} />
            <div className='major-name'><Lang>lang_major</Lang>:&nbsp;<Lang>{major || ''}</Lang></div>
        </div>
    )
}

const GPA = ({ gpa }) => {
    return (
        <div className='school-container'>
            <div style={{ width: 40 }} />
            <div className='major-name'><Lang>lang_gpa</Lang>:&nbsp;<Lang>{gpa || ''}</Lang></div>
        </div>
    )
}

const Education = () => {
    const educations = dataStorage.config?.education || []
    return (
        <div className='personal-info-container'>
            <Title title='lang_job_experiences' icon={path.mdiSchool} round />
            <Divider />
            {
                educations.map((e, i) => {
                    return (
                        <>
                            <School {...e} />
                            <Major {...e} />
                            <GPA {...e} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Education