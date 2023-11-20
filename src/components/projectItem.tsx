import { projectItemProps } from '@/types/componentType';

import '../styles/component.scss';

const ProjectItem = ({description, details, duration, link, role, skills, title}: projectItemProps) => {
    return (
        <div className="projectItem">
            <div className="columnFlex summaryArea">
                <h4>{title}</h4>
                <span>{role}</span>
                <span>{duration}</span>
            </div>
            <div className="columnFlex descriptionArea">
                {typeof description !== 'undefined' && <div className="detailArea">{description}</div>}
                <h5>Details</h5>
                <ul className="detailArea">
                    {details.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h5>Skills</h5>
                <div className="rowFlex">
                    {skills.map((item, idx) => <div key={idx} className="highlight skillItem">{item}</div>)}
                </div>
                {link !== '' ? <span className="linkArea">참고자료: <a href={link} target="_blank">link</a></span> : null}
            </div>
        </div>
    )
}

export default ProjectItem;