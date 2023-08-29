export enum Language {
    English = "en",
};

export interface IStrings {
    [key: string]: Record<Language, string>;
}

export function getString(language: Language, key: string): string {
    return strings[key][language];
}

export const strings: IStrings = {
    headingBanner: {
        [Language.English]: "Hello, I'm Rio<br/>I'm a software engineer.",
    },
}