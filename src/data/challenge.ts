export interface Challenge {
    title: string;
    description: string;
    bounty: string;
}

export const challenges: Challenge[] = [
    {
        title: "Build a Mini Wallet",
        description: "Create a simple crypto wallet app and submit your repo.",
        bounty: "500 MYR",
    },
    {
        title: "Frontend UI Challenge",
        description: "Design a responsive dashboard using Tailwind or AntD.",
        bounty: "300 MYR",
    },
    {
        title: "Open Source Contribution",
        description: "Contribute to a Malaysian open-source project.",
        bounty: "400 MYR",
    },
];
