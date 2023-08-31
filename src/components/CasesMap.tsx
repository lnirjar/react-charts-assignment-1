import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { fetchCountrySpecificCasesData } from '../lib/fetchCountrySpecificCasesData';


export default function CasesMap() {
    const { isLoading, isError, data = [], error } = useQuery('country specific data', fetchCountrySpecificCasesData)

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

    return (
        <div>
            <MapContainer style={{ height: '80vh' }} center={[20, 77]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map(({ country, cases, deaths, recovered, active, countryInfo: { _id, lat, long } }) => (
                        <Marker position={[lat, long]} key={`${country}-${lat}-${long}-${_id}`}>
                            <Popup>
                                <ul>
                                    <li><span className='font-semibold'>Country</span>: {country}</li>
                                    <li><span className='font-semibold'>Cases</span>: {cases}</li>
                                    <li><span className='font-semibold'>Active</span>: {active}</li>
                                    <li><span className='font-semibold'>Recovered</span>: {recovered}</li>
                                    <li><span className='font-semibold'>Deaths</span>: {deaths}</li>
                                </ul>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}
