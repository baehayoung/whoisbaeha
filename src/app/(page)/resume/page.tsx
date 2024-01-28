"use client";
import Image from 'next/image';
import {useResume} from '@/hooks/usePages';

import WorkItem from '@/components/Items/WokrItem';
import ProjectItem from '@/components/projectItem';

import {backSkillList, experiencesList, frontSkillList, introString, manageSkillList, projectList} from '@/constants/resumeConfig';
import profileImgFirst from '../../../../public/images/profileImg1.jpg';
import { Github, cpp, Confluence, CSS, Git, Gitlab, HTML, JS, Jira, NodeJS, Python, React, Redux } from '../../../../public/svgs';

import '@/styles/page.scss';

const ResumePage = () => {
    const {experienceIdxObj, projectIdxObj, handleMouseOver} = useResume();

    return (
        <div className="resumePageContainer">
            <div className="resumeContainer">
                <h2>About Me</h2>
                <div className="resumeItem">
                    <div className="rowItem">
                        <Image src={profileImgFirst} alt="frontSkill" width={300} />
                        <div style={{width: '60%'}}>{introString}</div>
                    </div>
                </div>
            </div>
            <div className="resumeContainer experiences">
                <div className="flexColumnContainer">
                    <h2>Experiences</h2>
                    <div className="resumeItem">
                        <h3 className="highlight">Work</h3>
                        {experiencesList.workList.map((item, idx) => <WorkItem item={item} />)}
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="flexColumnContainer">
                    <h2>Project</h2>
                    <span style={{color: 'gray'}}>*프로젝트 진행 내용은 webOS TV 개발 페이지인 <a  href="https://enactjs.com/">Enact 공식 문서</a>에 공개된 내용 범위 내에서 작성되었습니다.</span>
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
            <div className="resumeContainer">
                <div style={{display: 'flex'}}>
                    <div className="resumeItem normalHeight flexOne">
                        <h3 className="highlight">Education</h3>
                        {experiencesList.educationList.map((item, idx) => <WorkItem item={item} />)}
                    </div>
                    <div className="resumeItem flexOne">
                        <h3 className="highlight">Others</h3>
                        {experiencesList.othersList.map((item, idx) => <WorkItem item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage;