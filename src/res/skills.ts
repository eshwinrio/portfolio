import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAndroid, faGitAlt, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

interface SkillDictionary {
    name: string;
    notes: string;
    icon: IconProp;
}

export const skills: SkillDictionary[] = [
    { name: "Git", notes: "Git, GitHub, or GitLab for Version control", icon: faGitAlt },
    { name: "NodeJs", notes: "ExpressJs applications, microservices architecture, REST API with TypeScript", icon: faNodeJs },
    { name: "ReactJs", notes: "CRA and SSR with NextJs and Typescript", icon: faReact },
    { name: "Android Jetpack", notes: "Compose, Navigation, Room and Kotlin", icon: faAndroid },
];
