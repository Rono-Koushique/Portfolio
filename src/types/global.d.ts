type Skill = {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    subtitle: string;
    extra: string[];
    projectCount: number;
    href: string;
};

type Service = {
    icon: string;
    title: string;
    description: string;
    projectCount: number;
    href: string;
};

type Work = {
    title: string;
    type: string;
    timeStart: string;
    timeEnd: string;
    description: string;
    imgLink: string;
    liveLink: string;
    features: string[];
};

type Technology = {
    icon?: string;
    title: string;
};

type Area = {
    title: string;
    description: string[];
    technologies: Technology[];
};

type Social = {
    title: string;
    href: string;
    icon: string;
};
