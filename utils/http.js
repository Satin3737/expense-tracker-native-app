import axios from 'axios';

const baseUrl = 'https://expense-tracker-native-app-default-rtdb.europe-west1.firebasedatabase.app';

export const postExpense = async expenseData => {
    const {data} = await axios.post(`${baseUrl}/expenses.json`, expenseData);
    return data.name;
};

export const getExpense = async () => {
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

    return expenses;
};
