import { Skill } from "@core/type/skill";

export interface PortfolioButton {
    title: string;
    endpoint: string;
}

export interface PortfolioItem {
    title: string;
    logoImgPath: string;

    description: string;

    buttonList: PortfolioButton[];

    skillList: Skill[];
}

