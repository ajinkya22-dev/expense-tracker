import { useState } from "react";
import Dashboard from "./Dashboard.jsx";  // Assuming you have a Dashboard component
import Transactions from "./Transactions.jsx";  // Assuming you have a Transactions component
import About from "./About.jsx";  // Assuming you have an About component

export default function Navbar() {
    // State to track which component should be displayed
    const [activeComponent, setActiveComponent] = useState("dashboard");

    // Function to handle navigation (sets the active component)
    const handleNavigation = (component) => {
        setActiveComponent(component);  // Change the active component based on the link clicked
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
                                href="#dashboard"
                                onClick={(e) => { e.preventDefault(); handleNavigation("dashboard"); }}
                                className="hover:text-blue-600"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#transactions"
                                onClick={(e) => { e.preventDefault(); handleNavigation("transactions"); }}
                                className="hover:text-blue-600"
                            >
                                Transactions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}
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
