import axios from 'axios';
import {useContext} from 'react';
import {ExpensesContext} from '../store/expenses-context';

const ExpensesService = () => {
    const {toggleLoading} = useContext(ExpensesContext);
    const baseUrl = 'https://expense-tracker-native-app-default-rtdb.europe-west1.firebasedatabase.app';

    const addApiExpense = async expenseData => {
        toggleLoading(true);
        const {data} = await axios.post(`${baseUrl}/expenses.json`, expenseData);
        toggleLoading(false);
        return data.name;
    };

    const getApiExpense = async () => {
        toggleLoading(true);
        const {data} = await axios.get(`${baseUrl}/expenses.json`);

        const expenses = [];
        for (const key in data) {
            const expenseObj = {
                id: key,
                amount: data[key]?.amount,
                date: new Date(data[key]?.date),
                description: data[key]?.description
            };
            expenses.push(expenseObj);
        }

        toggleLoading(false);
        return expenses;
    };

    const updateApiExpense = async (id, expenseData) => {
        toggleLoading(true);
        await axios.put(`${baseUrl}/expenses/${id}.json`, expenseData);
        toggleLoading(false);
    };

    const deleteApiExpense = async id => {
        toggleLoading(true);
        await axios.delete(`${baseUrl}/expenses/${id}.json`);
        toggleLoading(false);
    };

    return {
        addApiExpense,
        getApiExpense,
        updateApiExpense,
        deleteApiExpense
    };
};

export default ExpensesService;
