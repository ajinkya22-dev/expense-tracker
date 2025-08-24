import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../Store/TransctionSlice.jsx';
import { addNotification } from '../Store/NotificationSlice.jsx';
import { useTheme } from '../context/ThemeContext';
import { FiCalendar, FiDollarSign, FiList, FiTag, FiClock, FiCheckCircle } from 'react-icons/fi';

const AddTransaction = ({ closeModal }) => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    amount: '',
    type: 'Expense',
    source: '',
    expenseType: 'Food',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0].slice(0, 5)
  });

  const [errors, setErrors] = useState({});

  const expenseCategories = [
    { id: 'food', name: 'Food', color: 'bg-indigo-400' },
    { id: 'shopping', name: 'Shopping', color: 'bg-green-500' },
    { id: 'travel', name: 'Travel', color: 'bg-blue-300' },
    { id: 'bills', name: 'Bills', color: 'bg-rose-400' },
    { id: 'entertainment', name: 'Entertainment', color: 'bg-purple-400' },
    { id: 'health', name: 'Health', color: 'bg-teal-400' },
    { id: 'education', name: 'Education', color: 'bg-amber-400' },
    { id: 'other', name: 'Other', color: 'bg-gray-400' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    if (!formData.source) {
      newErrors.source = 'Description is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (formData.type === 'Expense' && !formData.expenseType) {
      newErrors.expenseType = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create new transaction
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(formData.amount),
      type: formData.type,
      source: formData.source,
      expenseType: formData.type === 'Expense' ? formData.expenseType : '',
      date: formData.date,
      time: formData.time,
    };

    // Dispatch to Redux
    dispatch(addTransaction(newTransaction));

    // Add notification
    dispatch(addNotification({
      title: 'Transaction Added',
      message: `${formData.type === 'Income' ? 'Income' : 'Expense'} of $${formData.amount} has been added successfully`,
      type: 'success',
    }));

    // Close modal if provided
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Transaction Type */}
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">
            Transaction Type
          </label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => handleChange({ target: { name: 'type', value: 'Income' } })}
              className={`flex-1 px-4 py-2 rounded-md ${
                formData.type === 'Income'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-2 border-green-400 dark:border-green-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => handleChange({ target: { name: 'type', value: 'Expense' } })}
              className={`flex-1 px-4 py-2 rounded-md ${
                formData.type === 'Expense'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-2 border-red-400 dark:border-red-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium mb-2 dark:text-gray-300"
          >
            Amount ($)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiDollarSign className="text-gray-400" />
            </div>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.amount}</p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="source"
            className="block text-sm font-medium mb-2 dark:text-gray-300"
          >
            Description
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiList className="text-gray-400" />
            </div>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter description..."
            />
          </div>
          {errors.source && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.source}</p>
          )}
        </div>

        {/* Category Selection (for Expenses only) */}
        {formData.type === 'Expense' && (
          <div>
            <label
              htmlFor="expenseType"
              className="block text-sm font-medium mb-2 dark:text-gray-300"
            >
              Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiTag className="text-gray-400" />
              </div>
              <select
                id="expenseType"
                name="expenseType"
                value={formData.expenseType}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {expenseCategories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            {errors.expenseType && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.expenseType}</p>
            )}
          </div>
        )}

        {/* Date & Time Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium mb-2 dark:text-gray-300"
            >
              Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            {errors.date && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.date}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium mb-2 dark:text-gray-300"
            >
              Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiClock className="text-gray-400" />
              </div>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FiCheckCircle />
          <span>Save Transaction</span>
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
