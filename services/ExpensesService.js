import axios from 'axios';
import {useContext} from 'react';
import {ExpensesContext} from '../store/expenses-context';

const ExpensesService = () => {
    const {toggleLoading, toggleError} = useContext(ExpensesContext);
    const baseUrl = 'https://expense-tracker-native-app-default-rtdb.europe-west1.firebasedatabase.app';

    const startFetching = () => {
        toggleLoading(true);
        toggleError(false);
    };

    const fetchingError = error => {
        toggleLoading(false);
        toggleError(true);
        console.log(`code: ${error.code}, message: ${error.message}`);
    };

    const addApiExpense = async expenseData => {
        startFetching();
        try {
            const {data} = await axios.post(`${baseUrl}/expenses.json`, expenseData);
            toggleLoading(false);
            return data.name;
        } catch (e) {
            fetchingError(e);
        }
    };

    const getApiExpense = async () => {
        startFetching();
        const expenses = [];
        try {
            const {data} = await axios.get(`${baseUrl}/expenses.json`);
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
        } catch (e) {
            fetchingError(e);
        }
        return expenses;
    };

    const updateApiExpense = async (id, expenseData) => {
        startFetching();
        try {
            await axios.put(`${baseUrl}/expenses/${id}.json`, expenseData);
            toggleLoading(false);
        } catch (e) {
            fetchingError(e);
        }
    };

    const deleteApiExpense = async id => {
        startFetching();
        try {
            await axios.delete(`${baseUrl}/expenses/${id}.json`);
            toggleLoading(false);
        } catch (e) {
            fetchingError(e);
        }
    };

    return {
        addApiExpense,
        getApiExpense,
        updateApiExpense,
        deleteApiExpense
    };
};

export default ExpensesService;
