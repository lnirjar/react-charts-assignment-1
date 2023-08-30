import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='w-44 flex flex-col gap-1 bg-neutral-50 p-4 rounded-lg shadow-xl shadow-neutral-200 sticky top-6'>
            <NavLink to='/contacts' className={({ isActive }) => isActive ? "font-bold" : "font-bold text-gray-700"}>
                Contacts
            </NavLink>
            <NavLink to='/charts-and-maps' className={({ isActive }) => isActive ? "font-bold" : "font-bold text-gray-700"}>
                Charts and Maps
            </NavLink>
        </nav>
    )
}

export default Navbar