export interface experienceProps {
    title: string;
    duration: string;
    description?: string;
}

export interface projectProps {
    title: string;
    role: string;
    link?: string;
    duration: string;
    details: Array<string>;
    description?: string;
    skills: Array<string>;
}

export interface skillProps {
    title: string;
    description?: string;
}