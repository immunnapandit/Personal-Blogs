import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto py-4 px-5">
                <ul className="flex justify-center space-x-5">
                    <li className="cursor-pointer hover:text-blue-900">
                        <Link to="/">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-900">
                        <Link to="/blogs">Blogs</Link></li>
                    <li className="cursor-pointer hover:text-blue-900">
                        <Link to="/aboutus">About Us</Link></li>
                    <li className="cursor-pointer hover:text-blue-900"></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
