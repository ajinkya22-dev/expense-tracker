import { FaApple, FaShoppingCart, FaPlane, FaPiggyBank } from 'react-icons/fa';
import MixBar from '../charts/MixBarChart.jsx';
import PieChart from '../charts/PieChart.jsx';
import food from '../Assets/food.png';
import travel from '../Assets/travel.png';
import saving from '../Assets/saving.png';
import shopping from '../Assets/shopping.png';
import {useSelector } from 'react-redux';
import React from "react";


export default function Dashboard() {

    const transactions = useSelector(state => state.transactions.Transactions);
    const calculateFoodCost = transactions
        .filter(txn => txn.expenseType === "Food")
        .reduce((total, txn) => total + txn.amount, 0);
    return (
        <div className="p-6">
            <div className="flex space-x-6 mb-8">
                <div className="category-box shadow-md hover:shadow-lg p-6 rounded-lg text-center w-52 bg-indigo-400 flex flex-col items-center">
                    <img src={food} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Food & Essentials</div>
                    <div className="mt-2 font-semibold text-white">$120</div>
                </div>

                <div className="category-box shadow-md hover:shadow-lg p-6 rounded-lg text-center w-52 bg-green-500 flex flex-col items-center">
                    <img src={shopping} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Shopping</div>
                    <div className="mt-2 font-semibold text-white">$250</div>
                </div>

                <div className="category-box shadow-md hover:shadow-lg p-6 rounded-lg text-center w-52 bg-blue-300 flex flex-col items-center">
                    <img src={travel} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Travel</div>
                    <div className="mt-2 font-semibold text-white">$400</div>
                </div>

                <div className="category-box shadow-md hover:shadow-lg p-6 rounded-lg text-center w-52 bg-rose-400 flex flex-col items-center">
                    <img src={saving} alt="icon" className="w-10 h-10 mb-2" />
                    <div className="text-white font-medium">Savings</div>
                    <div className="mt-2 font-semibold text-white">$800</div>
                </div>
            </div>



            {/* BarChart & PieChart Dashboard */}
            <div className="flex space-x-8 mb-8">
                <div className="chart-container w-72">
                    <MixBar />
                    {/*<div className="mt-4 text-center text-sm text-gray-600">*/}
                    {/*    Details about the bar chart go here.*/}
                    {/*</div>*/}
                </div>
                <div className="chart-container w-300">
                    <PieChart />
                    {/*<div className="mt-4 text-center text-sm text-gray-600">*/}
                    {/*    Details about the pie chart go here.*/}
                    {/*</div>*/}
                </div>
            </div>

            {/* History Section */}
            <div className="history-section mt-8 p-4 border-2 rounded-md">
                <h3 className="text-xl font-semibold mb-4">History ( Week )</h3>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full table-auto text-black">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center text-gray-500">No transactions yet.</td>
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
        </div>
    );
}
