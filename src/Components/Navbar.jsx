
import Dashboard from "./Dashboard.jsx";
import Transactions from "./Transactions.jsx";
import About from "./About.jsx";

export default function Navbar({ setSession}) {
    // State to track which component should be displayed


    // Function to handle navigation (sets the active component)
    const handleNavigation = (component) => {
        setSession(component);  // Change the active component based on the link clicked
    };

    return (
        <div className="h-screen w-64 box-border border-r-4 border-transparent hover:border-gray-400 transition duration-300 flex flex-col bg-white">
            {/* Profile Section Inside White Box */}
            <div className="p-4 border-b flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full">
                    {/* Profile Image */}
                </div>

                <div className="text-lg font-semibold text-black hover:text-blue-600">
                   Ajinkya Pathak
                </div>
            </div>

            {/* Navigation Section */}
            <div>
                <nav className="flex-1 p-6">
                    <ul className="flex flex-col space-y-6 text-xl text-black">
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

            {/* Conditionally render components based on activeComponent */}
            {/*<div className="flex-1">*/}
            {/*    {activeComponent === "dashboard" && <Dashboard />}*/}
            {/*    {activeComponent === "transactions" && <Transactions />}*/}
            {/*    {activeComponent === "about" && <About />}*/}
            {/*</div>*/}
        </div>

    );
}
