export interface experienceProps {
    title: string;
    job?: string;
    duration: string;
    description?: string;
    works? :Array<string>;
    skills? :Array<string>;
    note? :string;
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