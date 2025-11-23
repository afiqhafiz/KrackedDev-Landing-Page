// src/data/features.ts
export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: '🌐',
        title: 'Empower Malaysia’s Devs',
        description:
            'Connecting and supporting devs across the ecosystem to turn ideas into a tech powerhouse.',
    },
    {
        icon: '🚀',
        title: 'Level Up Together',
        description:
            'Boosting each other up so every dev grows, has fun, and sharpens their skills along the way.',
    },
    {
        icon: '⚡',
        title: 'Community Energy',
        description:
            'We share jobs, memes, frameworks, rants — all with Malaysian flavour.',
    },
];
