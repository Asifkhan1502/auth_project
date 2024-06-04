import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="w-full flex gap-8 justify-end p-2 pr-12">
            <NavLink to='/' className="py-2 px-4 border-b-2 border-red">Home</NavLink>
            <NavLink to='/contact-us' className="py-2 px-4 border-b-2 border-red">Contact us</NavLink>
            <NavLink to='/Tasks' className="py-2 px-4 border-b-2 border-red">Tasks</NavLink>
        </nav>
    )
}
export default Navbar;