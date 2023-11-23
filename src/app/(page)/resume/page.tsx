"use client";
import {useResume} from '@/hooks/usePages';
import {backSkillList, experiencesList, frontSkillList, introString, manageSkillList, projectList} from '@/constants/resumeConfig';

import ProjectItem from '@/components/projectItem';

import '@/styles/page.scss';
import { Github, cpp, Confluence, CSS, Git, Gitlab, HTML, JS, Jira, NodeJS, Python, React, Redux } from '../../../../public/svgs';
import Image from 'next/image';

const ResumePage = () => {
    const {experienceIdxObj, projectIdxObj, handleMouseOver} = useResume();

    return (
        <div className="resumePageContainer">
            <div className="resumeContainer flexColumnContainer">
                <h2>About Me</h2>
                <div className="resumeItem">{introString}</div>
            </div>
            <div className="resumeContainer experiences">
                <div className="flexColumnContainer leftArea">
                    <h2>Experiences</h2>
                    <span style={{color: 'gray'}}>*마우스를 올리면 내용을 확인할 수 있습니다.</span>
                    <div className="resumeItem">
                        <h3>Work</h3>
                        {experiencesList[0].map((item, idx) => (
                            <div 
                                key={idx} 
                                onMouseOver={() => {handleMouseOver(100 + idx)}}
                                className={experienceIdxObj.type === 0 && experienceIdxObj.idx === idx ? "selectedItem" : ""} 
                            >
                                {`${item.title} (${item.duration})`}
                            </div>
                        ))}
                    </div>
                    <div className="resumeItem">
                        <h3>Education</h3>
                        {experiencesList[1].map((item, idx) => (
                            <div key={idx} onMouseOver={() => {handleMouseOver(110 + idx)}} className={experienceIdxObj.type === 1 && experienceIdxObj.idx === idx ? "selectedItem" : ""}>
                                {`${item.title} (${item.duration})`}
                            </div>
                        ))}
                    </div>
                    <div className="resumeItem">
                        <h3>Others</h3>
                        {experiencesList[2].map((item, idx) => (
                            <div key={idx} onMouseOver={() => {handleMouseOver(120 + idx)}} className={experienceIdxObj.type === 2 && experienceIdxObj.idx === idx ? "selectedItem" : ""} >
                                {`${item.title} (${item.duration})`}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flexColumnContainer rightArea">
                    {experiencesList[experienceIdxObj.type][experienceIdxObj.idx]?.description || ''}
                </div>
            </div>
            <div className="resumeContainer">
                <div className="flexColumnContainer">
                    <h2>Project</h2>
                    <div className="resumeItem">
                        <h3>Frontend</h3>
                        {projectList[0].map((item, idx) => (
                            <ProjectItem 
                                key={idx}
                                title={item.title}
                                details={item.details}
                                duration={item.duration}
                                description={item.description}
                                role={item.role}
                                skills={item.skills}
                                link={typeof item.link !== 'undefined'? item.link:''}
                            />
                        ))}
                    </div>
                    <div className="resumeItem">
                        <h3>Others</h3>
                        {projectList[1].map((item, idx) => (
                            <ProjectItem 
                                key={idx}
                                title={item.title}
                                details={item.details}
                                duration={item.duration}
                                description={item.description}
                                role={item.role}
                                skills={item.skills}
                                link={typeof item.link !== 'undefined'? item.link:''}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="flexColumnContainer leftArea">
                    <h2>Skills</h2>
                    <div className="skillContainer">
                        <div className="categoryBox">
                            <h3>Frontend</h3>
                            <div className="skillBox">
                                {frontSkillList.map((item, idx) => (
                                    <div key={idx} className="skillItem"><Image src={item} alt="frontSkill" width={50}/></div>
                                ))}
                            </div>
                        </div>
                        <div className="categoryBox">
                            <h3>Others</h3>
                            <div className="skillBox">
                                {backSkillList.map((item, idx) => (
                                    <div key={idx} className="skillItem"><Image src={item} alt="otherSkill" width={50}/></div>
                                ))}
                            </div>
                        </div>
                        <div className="categoryBox">
                            <h3>Project Manage</h3>
                            <div className="skillBox">
                                {manageSkillList.map((item, idx) => (
                                    <div key={idx} className="skillItem"><Image src={item} alt="pmSkill" width={50}/></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage;