import { itemProps } from '@/types/resumeType';

import '../../styles/component.scss';

const ExperienceItem = (props: { item: itemProps }) => {
    const contentExisit = (props.item.description || props.item.skills || props.item.details);

    return (
        <div className="itemContainer">
            <div className={contentExisit ? "leftArea columnFlex" : "columnFlex"}>
                <span className="title">{props.item.title}</span>
                <span className="role">{`${props.item.role} | ${props.item.duration}`}</span>
            </div>
            {contentExisit && <div className="contents">
                {props.item.description}
                <h5 className="details">Details</h5>
                <ul>
                    {props.item.details?.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                {props.item.skills && <div className="skills">
                    Skills: {props.item.skills?.map((item, idx) => <div key={idx} className="highlight">{item}</div>)}
                </div>}
            </div>}
        </div>
    )
}

export default ExperienceItem;