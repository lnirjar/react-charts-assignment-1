export type CountrySpecificCasesData = {
    "country": string,
    "countryInfo": {
        "_id": number,
        "lat": number,
        "long": number
    },
    "cases": number,
    "deaths": number,
    "recovered": number,
    "active": number,
}

export async function fetchCountrySpecificCasesData() {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data: CountrySpecificCasesData[] = await response.json();
    return data;
}