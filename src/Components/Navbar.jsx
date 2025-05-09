import Dashboard from "./Dashboard.jsx";
import Transactions from "./Transactions.jsx";
import About from "./About.jsx";
import profile from "../Assets/profile.png";

export default function Navbar({ setSession, setDarkTheme, theme }) {
    const lightIcon = "☀️"; // Light Mode
    const darkIcon = "🌙";  // Dark Mode

    // Toggle dark/light theme
    const handleThemeToggle = () => {
        setDarkTheme(!theme);
    };

    // Function to handle navigation
    const handleNavigation = (component) => {
        setSession(component);
    };

    return (
        <div className={`h-screen w-64 box-border border-r-4 border-transparent hover:border-gray-400 transition duration-300 flex flex-col ${theme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Profile Section */}
            <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Profile Image */}
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={profile} alt="profile" className="w-full h-full object-cover" />
                    </div>

                    {/* Profile Name */}
                    <div className={`text-lg font-semibold ${theme ? 'text-white' : 'text-black'} hover:text-blue-600`}>
                        ExpensifyX
                    </div>
                </div>

                {/* Theme Toggle Icon */}
                <button onClick={handleThemeToggle} className="text-2xl focus:outline-none">
                    {theme ? lightIcon : darkIcon}
                </button>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 p-6">
                <ul className="flex flex-col space-y-6 text-xl">
                    <li>
                        <a
                            href="#Dashboard"
                            onClick={(e) => { e.preventDefault(); handleNavigation("Dashboard"); }}
                            className="hover:text-blue-600"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Transactions"
                            onClick={(e) => { e.preventDefault(); handleNavigation("Transactions"); }}
                            className="hover:text-blue-600"
                        >
                            Transactions
                        </a>
                    </li>
                    <li>
                        <a
                            href="#About"
                            onClick={(e) => { e.preventDefault(); handleNavigation("About"); }}
                            className="hover:text-blue-600"
                        >
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
