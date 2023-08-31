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
import { useQuery } from 'react-query';
import { fetchCasesData } from '../lib/fetchCasesData';

function CasesChart() {
    const { isLoading, isError, data, error } = useQuery('cases data', fetchCasesData);

    if (isLoading) {
        return (
            <div className='bg-neutral-50 p-6 rounded-lg shadow-xl shadow-neutral-200 mx-auto my-8 w-fit text-center'>
                <p className='text-4xl'>
                    Loading...
                </p>
            </div>
        )
    }

    if (isError) {
        return <span>Error: {error instanceof Error ? error.message : 'Failed to fetch data'}</span>
    }

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

    const labels = data ? Object.keys(data.cases) : [];

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Cases',
                data: data ? Object.values(data.cases) : [],
                borderColor: 'rgb(251 191 36)',
                backgroundColor: 'rgb(251 191 36 / 0.5)',
            },
            {
                label: 'Recovered',
                data: data ? Object.values(data.recovered) : [],
                borderColor: 'rgb(22 163 74)',
                backgroundColor: 'rgb(22 163 74 / 0.5)',
            },
            {
                label: 'Deaths',
                data: data ? Object.values(data.deaths) : [],
                borderColor: 'rgb(185 28 28)',
                backgroundColor: 'rgb(185 28 28 / 0.5)',
            },
        ],
    };
    return (
        <Line options={options} data={chartData} />
    );
}

export default CasesChart