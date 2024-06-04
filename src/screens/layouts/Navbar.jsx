import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme.slice";

const Navbar = () => {
    const theme = useSelector(state => state.theme).theme;
    const dispatch = useDispatch();

    return (
        <nav className="w-full flex gap-8 justify-end p-2 pr-12">
            <NavLink to='/' className="py-2 px-4 border-b-2 border-red">Home</NavLink>
            <NavLink to='/contact-us' className="py-2 px-4 border-b-2 border-red">Contact us</NavLink>
            <NavLink to='/Tasks' className="py-2 px-4 border-b-2 border-red">Tasks</NavLink>
            <button
                className={`px-6 py-2 rounded-lg ${theme === 'light' ? "bg-black text-white" : "bg-white text-black"}`}
                onClick={() => dispatch(toggleTheme())}
            >Switch {theme === 'light' ? 'Dark' : 'Light'}</button>
        </nav>
    )
}
export default Navbar;