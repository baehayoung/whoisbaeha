export interface itemProps {
    title: string;
    role?: string;
    link?: string;
    duration: string;
    description?: string;
    details?: Array<string>;
    skills?: Array<string>;
    note?: string;
}

export interface skillProps {
    title: string;
    description?: string;
}