export interface CountryRaw {
    uuid: string;
    names: {
        common: string;
        official: string;
    };
    flag: {
        url_svg: string;
    };
    capitals: {
        name: string;
    }[];
    region: string;
    subregion: string;
    population: number;
    area: {
        kilometers: number;
    };
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        name: string;
    }[];
    codes: {
        alpha_2: string;
        alpha_3: string;
    };
}

export interface Country {
    uuid: string;
    commonName: string;
    officialName: string;
    flag: string | null;
    capitals: string[];
    region: string;
    subregion: string | null;
    population: number;
    area: number;
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: string[];
    codeA2: string | null;
    codeA3: string | null;
}
