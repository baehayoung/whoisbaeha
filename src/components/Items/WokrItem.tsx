import { experienceProps } from '@/types/resumeType';

import '../../styles/component.scss';

const WorkItem = (props: {item: experienceProps}) => {
    const contentExisit = (props.item.description || props.item.skills || props.item.works);
    return (
        <div className="workItem">
            <div className={contentExisit? "leftArea columnFlex":"columnFlex"}>
                <span className="title">{props.item.title}</span>
                <span className="jobs">{`${props.item.job} | ${props.item.duration}`}</span>
            </div>
            {contentExisit && <div className="contents">
                <>{props.item.description}</>
                <br />
                <ul>
                    {props.item.works?.map((item, idx) =><li key={idx}>{item}</li>)}
                </ul>
                {props.item.skills && <div className="skills">
                    Skills: {props.item.skills?.map((item, idx) => <div key={idx} className="highlight">{item}</div>)}
                </div>}
            </div>}
        </div>
    )
}

export default WorkItem;