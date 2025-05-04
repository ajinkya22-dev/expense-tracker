import { createSlice } from "@reduxjs/toolkit";

export const TransactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        Transactions: [
            {
                id: 1,
                amount: 200,
                type: 'Income',
                source: 'Freelance Work',
                expenseType: '', // Empty because it's Income
                date: '2025-05-01',
                time: '10:00'
            },
            {
                id: 2,
                amount: 50,
                type: 'Expense',
                source: '-',
                expenseType: 'Food', // Expense type is "Food"
                date: '2025-05-02',
                time: '12:30'
            }
        ]
    },
    reducers: {
        // You can define your reducer functions here
        addTransaction: (state, action) => {
            state.Transactions.push(action.payload);
        },
        removeTransaction: (state, action) => {
            state.Transactions = state.Transactions.filter(
                transaction => transaction.id !== action.payload
            );
        }
    }
});

export const { addTransaction, removeTransaction } = TransactionSlice.actions;

export default TransactionSlice.reducer;
