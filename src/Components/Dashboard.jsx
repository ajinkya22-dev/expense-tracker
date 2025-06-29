import React from "react";
import { useSelector } from "react-redux";
import MixBar from '../charts/MixBarChart.jsx';
import PieChart from '../charts/PieChart.jsx';
import food from '../Assets/food.png';
import travel from '../Assets/travel.png';
import saving from '../Assets/saving.png';
import shopping from '../Assets/shopping.png';

export default function Dashboard() {
    const transactions = useSelector(state => state.transactions.Transactions);
    const calculateFoodCost = transactions
        .filter(txn => txn.expenseType === "Food")
        .reduce((total, txn) => total + txn.amount, 0);

    return (
        <div className="p-4 sm:p-6">
            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Card */}
                <div className="shadow-md hover:shadow-lg p-4 rounded-lg text-center bg-indigo-400 flex flex-col items-center">
                    <img src={food} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Food & Essentials</div>
                    <div className="mt-2 font-semibold text-white">₹120</div>
                </div>

                <div className="shadow-md hover:shadow-lg p-4 rounded-lg text-center bg-green-500 flex flex-col items-center">
                    <img src={shopping} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Shopping</div>
                    <div className="mt-2 font-semibold text-white">₹250</div>
                </div>

                <div className="shadow-md hover:shadow-lg p-4 rounded-lg text-center bg-blue-300 flex flex-col items-center">
                    <img src={travel} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Travel</div>
                    <div className="mt-2 font-semibold text-white">₹400</div>
                </div>

                <div className="shadow-md hover:shadow-lg p-4 rounded-lg text-center bg-rose-400 flex flex-col items-center">
                    <img src={saving} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Savings</div>
                    <div className="mt-2 font-semibold text-white">₹800</div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-8">
                <div className="w-full md:w-1/2">
                    <MixBar />
                </div>
                <div className="w-full md:w-1/2">
                    <PieChart />
                </div>
            </div>

            {/* History Section */}
            <div className="history-section mt-8 p-4 border-2 rounded-md bg-white shadow-sm overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">History (Week)</h3>
                <table className="min-w-full table-auto text-black text-sm sm:text-base">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                        <th className="py-2 px-4 border-b text-left">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="py-2 px-4 text-center text-gray-500">
                                No transactions yet.
                            </td>
                        </tr>
                    ) : (
                        transactions.map((txn) => (
                            <tr key={txn.id}>
                                <td className="py-2 px-4 border-b">{txn.date}</td>
                                <td className="py-2 px-4 border-b">₹{txn.amount}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
