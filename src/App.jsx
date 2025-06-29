import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Dashboard from "./components/Dashboard.jsx";
import Transactions from "./components/Transactions.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";

function App() {
    const [session, setSession] = useState("Dashboard");
    const [darkTheme, setDarkTheme] = useState(false);
    const [open, setOpen] = useState(false);

    const renderSection = () => {
        switch (session) {
            case "Dashboard":
                return <Dashboard theme={darkTheme} />;
            case "Transactions":
                return <Transactions theme={darkTheme} />;
            case "About":
                return <About theme={darkTheme} />;
            default:
                return <Dashboard theme={darkTheme} />;
        }
    };

    if (!open) {
        return <Login setOpen={setOpen} />;
    }

    return (
        <div className={`flex flex-col md:flex-row min-h-screen transition duration-300 ${darkTheme ? "bg-gray-900 text-white" : "bg-slate-300 text-black"}`}>

            {/* Sidebar */}
            <div className={`w-full md:w-64 shadow-md ${darkTheme ? "bg-gray-900" : "bg-white"}`}>
                <Navbar setSession={setSession} setDarkTheme={setDarkTheme} theme={darkTheme} />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6 flex justify-center items-start">
                <div className={`rounded-xl shadow-md p-4 sm:p-6 w-full max-w-4xl transition duration-300 ${darkTheme ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}


export default App;
