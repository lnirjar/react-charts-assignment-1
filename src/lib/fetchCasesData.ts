export type CasesData = {
    cases: { [key: string]: number },
    recovered: { [key: string]: number },
    deaths: { [key: string]: number },
}

export async function fetchCasesData() {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const data: CasesData = await response.json();
    return data;
}