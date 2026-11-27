import type { Country, CountryRaw } from "@/types/country"
import { getJson } from "./client";

type CountriesPage = {
    data: {
        objects: CountryRaw[];
        meta: {
            count: number;
            offset: number;
            total: number;
            more: boolean;
        };
    };
};

export function fetchCountriesPage(offset: number): Promise<CountriesPage> {
    return getJson<CountriesPage>(`https://api.restcountries.com/countries/v5?limit=100&offset=${offset}`, { headers: { 'Authorization': `Bearer ${import.meta.env.VITE_COUNTRIES_API_KEY}` } })
}

export function mapCountry(raw: CountryRaw): Country {
    const {
        uuid,
        names: { common, official },
        flag: { url_svg },
        capitals,
        region,
        subregion,
        population,
        area: { kilometers },
        currencies,
        languages,
        codes: { alpha_2, alpha_3 },
    } = raw;

    return {
        uuid,
        commonName: common,
        officialName: official,
        flag: url_svg.trim() !== '' ? url_svg : null,
        capitals: capitals.map(({ name }) => name),
        region,
        subregion: subregion.trim() !== '' ? subregion : null,
        population,
        area: kilometers,
        currencies,
        languages: languages.map(({ name }) => name),
        codeA2: alpha_2.trim() !== '' ? alpha_2 : null,
        codeA3: alpha_3.trim() !== '' ? alpha_3 : null,
    };
}

export async function fetchAllCountries(): Promise<Country[]> {
    let offset = 0;
    const results: Country[] = [];
    let hasMore: boolean;

    do {
        const json = await fetchCountriesPage(offset);
        const objects = json.data.objects;
        const pageRecords = objects.map(object => mapCountry(object))
        results.push(...pageRecords);
        if (json.data.meta.more && objects.length === 0) {
            throw new Error("API indicates more pages, but returned no countries");
        }
        offset += objects.length;
        hasMore = json.data.meta.more;
    } while (hasMore);

    return results;
}