import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTransaction } from "../Store/TransctionSlice.jsx";

export default function AddTransaction({ closeModal }) {
    const dispatch = useDispatch();

    // States to manage input fields
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(""); // Category: Expense or Income
    const [incomeSource, setIncomeSource] = useState(""); // Text input for income source
    const [expenseType, setExpenseType] = useState(""); // Expense type (Food, Travel, etc.)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Handle category change (Income or Expense)
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setIncomeSource(""); // Clear income source when switching categories
        setExpenseType(""); // Clear expense type when switching categories
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form fields
        if (!amount || !category || !date || !time || (category === "Income" && !incomeSource) || (category === "Expense" && !expenseType)) {
            alert("Please fill in all fields");
            return;
        }

        // Create new transaction object
        const newTransaction = {
            id: Date.now(), // Generate a unique ID (could use UUID)
            amount: parseFloat(amount),
            type: category === "Income" ? "Income" : "Expense", // For Income, type is "Income", for Expense, it is "Expense"
            source: category === "Income" ? incomeSource : expenseType, // Only add source if Income
            expenseType: category === "Expense" ? expenseType : "-", // Only add expenseType if Expense
            date,
            time,
        };

        // Dispatch the action to add the transaction to the Redux store
        dispatch(addTransaction(newTransaction));

        // Close the modal after submission
        closeModal();

        // Clear the form after submission
        setAmount("");
        setCategory("");
        setIncomeSource("");
        setExpenseType("");
        setDate("");
        setTime("");
    };

    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center mb-6">Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                {/* Amount Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter amount"
                        required
                    />
                </div>

                {/* Category Field (Expense/Income) */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                </div>

                {/* Income Source (Only visible if category is Income) */}
                {category === "Income" && (
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Income Source</label>
                        <input
                            type="text"
                            value={incomeSource}
                            onChange={(e) => setIncomeSource(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter income source"
                            required
                        />
                    </div>
                )}

                {/* Expense Type (Visible if category is Expense) */}
                {category === "Expense" && (
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Expense Type</label>
                        <select
                            value={expenseType}
                            onChange={(e) => setExpenseType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Select Expense Type</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>
                )}

                {/* Date Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Time Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    );
}
