import React from 'react'
import './CaseStudy.css'
import { caseStudy1, caseStudy2, caseStudy3 } from '../../images/images'

function CaseStudy() {
    const caseStudyImgs = [caseStudy1, caseStudy2, caseStudy3]
    const caseStudyTitles = [
        `Ausbeds: Scripted Chatbot`,
        `Blaze Research: Rebrand`,
        `COMING IN 2020- StartScale: 'Uber of Marketing'`,
    ]
    return (
        <div className="container">
            <h1 className="title--1">Case Studies</h1>
            
            <div className="CaseStudies--box marg--box">
                {[0,1,2].map(i => (
                    <div className="caseStudy">
                        <div className="caseStudy--info">
                            <img src={caseStudyImgs[1]} alt="" className="caseStudyImg"/>
                            <div className="Shade">
                                <h4>{caseStudyTitles[1]}</h4>
                                <h6>Cortex Copywriter</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CaseStudy
