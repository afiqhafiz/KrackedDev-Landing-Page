export interface Challenge {
    title: string;
    description: string;
    bounty: string;
}

export const challenges: Challenge[] = [
    {
        title: "Craft an awesome landing page for “Kracked Devs”",
        description: "The most creative + coolest concept claims the reward! Submit in the comment section",
        bounty: "100 MYR",
    },
    {
        title: "Frontend UI Challenge",
        description: "Design a responsive dashboard using Tailwind or AntD.",
        bounty: "300 MYR",
    },
    {
        title: "Coming Soon",
        description: "Are you ready?",
        bounty: "XXX MYR",
    },
];
