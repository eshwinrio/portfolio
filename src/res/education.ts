interface Education {
    readonly degree: string;
    readonly institute: {
        readonly name: string;
        readonly city: string;
        readonly country: string;
    };
    readonly startDate: string;
    readonly endDate?: string;
    readonly description: string;
    readonly isCurrent: boolean;
    readonly isCompleted: boolean;
    readonly isCertified: boolean;
    readonly grade?: string;
}

export const education: Education[] = [
    {
        degree: "Bachelor of Engineering",
        institute: {
            name: "Yenepoya Institute of Technology",
            city: "Mangalore",
            country: "India",
        },
        startDate: "2016",
        endDate: "2020",
        description: "B.E in Computer Science and Engineering",
        isCurrent: false,
        isCompleted: true,
        isCertified: true,
        grade: "First Class"
    },
    {
        degree: "Ontario College Certificate",
        institute: {
            name: "Conestoga College",
            city: "Kitchener",
            country: "Canada",
        },
        startDate: "2023",
        description: "Web Development",
        isCurrent: true,
        isCompleted: false,
        isCertified: false,
    }
]