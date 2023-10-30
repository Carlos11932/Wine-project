import { NavLink, useLocation } from 'react-router-dom';
import '../index.css'


export const Navbar = () => {

    return (
        <nav>
            <div>
                <span>Wine Shop</span>
            </div>
            <div >
                <div >
                    <NavLink to="/inicio" className={`block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4 ${useLocation().pathname === "/inicio" ? "text-teal-800": "text-white" }`}>
                        Inicio
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}