// src/data/features.ts
export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: '👥',
        title: 'United Devs res',
        description:
            'From junior to senior, frontend to blockchain — if you build, you belong.',
    },
    {
        icon: '💻',
        title: 'Open Source & Collabs',
        description:
            'Hack nights, mini products, knowledge drops, and skill leveling.',
    },
    {
        icon: '⚡',
        title: 'Community Energy',
        description:
            'We share jobs, memes, frameworks, rants — all with Malaysian flavour.',
    },
];
