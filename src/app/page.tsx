"use client";

import Image from 'next/image';
import ExperienceItem from '@/components/Items/ExperienceItem';

import { backSkillList, experiencesList, frontSkillList, introString, manageSkillList, projectList } from '@/constants/resumeConfig';
import profileImgFirst from '../../public/images/profileImg1.jpg';
import { Github, Mail } from '../../public/svgs';

import '@/styles/page.scss';

const ResumePage = () => {
    return (
        <div className="resumePageContainer">
            <div className="resumeContainer">
                <a id="aboutme"><h2>About Me</h2></a>
                <div className="resumeItem">
                    <div className="rowItem">
                        <div className="aboutMeImage"><Image src={profileImgFirst} alt="frontSkill" width={300} /></div>
                        <div className="aboutMe">{introString}</div>
                    </div>
                </div>
            </div>
            <div className="resumeContainer experiences">
                <div className="flexColumnContainer">
                    <a id="career"><h2>Career</h2></a>
                    <div className="resumeItem">
                        {experiencesList.workList.map((item, idx) => <ExperienceItem item={item} key={idx} />)}
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="flexColumnContainer">
                    <a id="project"><h2>Project</h2></a>
                    <h6 style={{ color: 'gray' }}>*프로젝트 진행 내용은 webOS TV 개발 페이지인 <a href="https://enactjs.com/">Enact 공식 문서</a>에 공개된 내용 범위 내에서 작성되었습니다.</h6>
                    <div className="resumeItem">
                        <h3 className="highlight">Frontend</h3>
                        {projectList[0].map((item, idx) => <ExperienceItem key={idx} item={item} />)}
                    </div>
                    <div className="resumeItem">
                        <h3 className="highlight">Others</h3>
                        {projectList[1].map((item, idx) => <ExperienceItem key={idx} item={item} />)}
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <a id="skills"><h2>Skills</h2></a>
                <div className="rowItem">
                    <div className="flexOne">
                        <h3>Frontend</h3>
                        <div className="skillBox border">
                            {frontSkillList.map((item, idx) => (
                                <div key={idx} className="skillItem"><Image src={item} alt="frontSkill" width={50} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="flexOne">
                        <h3>Others</h3>
                        <div className="skillBox">
                            {backSkillList.map((item, idx) => (
                                <div key={idx} className="skillItem"><Image src={item} alt="otherSkill" width={50} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="flexOne">
                        <h3>Project Manage</h3>
                        <div className="skillBox border">
                            {manageSkillList.map((item, idx) => (
                                <div key={idx} className="skillItem"><Image src={item} alt="pmSkill" width={50} /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="rowItem">
                    <div className="resumeItem normalHeight flexOne">
                        <h3 className="highlight">Education</h3>
                        {experiencesList.educationList.map((item, idx) => <ExperienceItem item={item} key={idx} />)}
                    </div>
                    <div className="resumeItem normalHeight flexOne">
                        <h3 className="highlight">Others</h3>
                        {experiencesList.othersList.map((item, idx) => <ExperienceItem item={item} key={idx} />)}
                    </div>
                </div>
            </div>
            <div className="resumeContainer">
                <a id="ref"><h3 className="highlight">Ref</h3></a>
                <div className="rowItem">
                    <Image src={Mail} alt="mail" width={30} />
                    <div> baehayoung214@gmail.com</div>
                </div>
                <div className="rowItem">
                    <Image src={Github} alt="github" width={30} />
                    <div> <a href="https://github.com/baehayoung" className="item">Develop Github</a></div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage;