import { useState, useEffect } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

type CasesData = {
    cases: { [key: string]: number },
    recovered: { [key: string]: number },
    deaths: { [key: string]: number },
}


function CasesChart() {
    const [casesData, setCasesData] = useState<CasesData>({
        cases: {},
        recovered: {},
        deaths: {}
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
            const data = await response.json()
            setCasesData(data)
        }
        fetchData()
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = Object.keys(casesData?.cases);

    const data = {
        labels,
        datasets: [
            {
                label: 'Cases',
                data: Object.values(casesData?.cases),
                borderColor: 'rgb(251 191 36)',
                backgroundColor: 'rgb(251 191 36 / 0.5)',
            },
            {
                label: 'Recovered',
                data: Object.values(casesData?.recovered),
                borderColor: 'rgb(22 163 74)',
                backgroundColor: 'rgb(22 163 74 / 0.5)',
            },
            {
                label: 'Deaths',
                data: Object.values(casesData?.deaths),
                borderColor: 'rgb(185 28 28)',
                backgroundColor: 'rgb(185 28 28 / 0.5)',
            },
        ],
    };
    return <Line options={options} data={data} />;
}

export default CasesChart