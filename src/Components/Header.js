import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="bg-white text-black flex justify-around underline-offset-8 border-2 border-transparent h-16 shadow-md ">
            <div className="flex items-center">
                <h1 className="nij-manrope-bold text-2xl"><span style={{ color: '#ff0000' }}>Tech</span>with<span style={{ color: '#3182ce'}}>munna</span></h1>
            </div>
            <div className="flex items-center space-x-8 font-medium">
                <ul className="flex">
                    <li className="px-4">
                    <Link to="/" className="cursor-pointer hover:text-blue-900">Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/blogs" className="cursor-pointer hover:text-blue-900">Blogs</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/aboutus" className="cursor-pointer hover:text-blue-900">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/memories" className="cursor-pointer hover:text-blue-900">Memories</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
