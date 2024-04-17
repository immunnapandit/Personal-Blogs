import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-black flex justify-around underline-offset-auto border-2 border-transparent h-16  shadow-md">
            <div className="flex items-center space-x-8 font-medium">
                <ul className="flex">
                    <li className="px-4">
                        <Link to="/privacy" className="hover:text-blue-600" aria-label="Privacy Policy">Privacy Policy</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cookiepolicy" className="hover:text-blue-600" aria-label="Cookie Policy">Cookie Policy</Link>
                    </li>
                    <a href="https://github.com/immunnapandit"
                        target="_blank" rel="noreferrer">
                    <li className="cursor-pointer">Developer's Profile</li>
                    </a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
