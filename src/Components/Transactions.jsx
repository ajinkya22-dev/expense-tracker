import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTransaction } from "../Store/TransctionSlice.jsx";
import AddTransaction from "./AddTransaction.jsx";

export default function Transactions() {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions.Transactions);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Transactions History</h1>

            {/* Add Transaction Button */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={openModal}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-grey-300 focus:outline-none"
                >
                    Add Transaction
                </button>
            </div>

            {/* Table to display transactions */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                        <th className="py-2 px-4 border-b text-left">Time</th>
                        <th className="py-2 px-4 border-b text-left">Type</th>
                        <th className="py-2 px-4 border-b text-left">Source</th>
                        <th className="py-2 px-4 border-b text-left">Amount</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>

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
                                <td className="py-2 px-4 border-b">{txn.time}</td>
                                <td className="py-2 px-4 border-b">{txn.type}</td>
                                <td className="py-2 px-4 border-b">{txn.source}</td>
                                <td className="py-2 px-4 border-b">₹{txn.amount}</td>
                                <td className="py-2 px-4 border-b">
                                    {/* Delete button with hover effect */}
                                    <button
                                        onClick={() => dispatch(removeTransaction(txn.id))}
                                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>

            {/* Modal to Add Transaction */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            X
                        </button>
                        <AddTransaction closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
}
