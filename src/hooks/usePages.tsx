import { useState } from 'react';

export const useResume = () => {
    const [experienceIdx, setExpIdx] = useState(0);
    const [projectIdx, setProjIdx] = useState(0);
    
    const handleMouseOver = (type: number) => {
        if (type >= 200) {
            setProjIdx(type % 100);
        } else {
            setExpIdx(type % 100);
        }
    };

    const experienceIdxObj = {
        type: Math.floor(experienceIdx/10),
        idx: experienceIdx % 10
    }

    const projectIdxObj = {
        type: Math.floor(projectIdx/10),
        idx: projectIdx % 10
    }

    return {experienceIdxObj, projectIdxObj, handleMouseOver}
}