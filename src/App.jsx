import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Dashboard from "./components/Dashboard.jsx";
import Transactions from "./components/Transactions.jsx";
import About from "./components/About.jsx";

function App() {
    const [session, setSession] = useState("Dashboard");

    const renderSection = () => {
        switch (session) {
            case "Dashboard":
                return <Dashboard />;
            case "Transactions":
                return <Transactions />;
            case "About":
                return <About />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-300">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <Navbar setSession={setSession} />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 flex justify-center items-start">
                <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-4xl">
                    {renderSection()}
                </div>
            </div>

        </div>
    );
}

export default App;
