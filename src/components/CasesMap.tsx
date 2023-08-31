import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

type CountrySpecificCasesData = {
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

export default function CasesMap() {
    const [casesData, setCasesData] = useState<CountrySpecificCasesData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const data = await response.json()
            setCasesData(data)
        }
        fetchData()
    }, []);

    return (
        <div>
            <MapContainer style={{ height: '80vh' }} center={[20, 77]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    casesData.map(({ country, cases, deaths, recovered, active, countryInfo: { _id, lat, long } }) => (
                        <Marker position={[lat, long]} key={_id}>
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
