import { SkillItem } from "./skill-item";

export interface ExperienceItem {
    position: string;

    company: string;

    logoImgPath: string;

    location: string;
    start: string;
    end: string;

    description: string;

    role?: string[];
    achievement?: string[];

    skillList?: SkillItem[];

    endpoint?: string;

    visible?: boolean;
}

