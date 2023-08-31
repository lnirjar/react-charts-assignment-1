import CasesChart from "./CasesChart"
import CasesMap from "./CasesMap"

function ChartsAndMaps() {

    return (
        <div>
            <h2 className="font-bold text-3xl text-slate-950 mb-2">Chart</h2>
            <CasesChart />
            <hr className="my-4" />
            <h2 className="font-bold text-3xl text-slate-950 my-2">Map</h2>
            <CasesMap />
        </div>
    )
}

export default ChartsAndMaps