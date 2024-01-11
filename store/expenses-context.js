import {createContext, useReducer} from 'react';
import dummyExpenses from '../dummy-data';

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: expenseData => {},
    deleteExpense: id => {},
    updateExpense: (id, expenseData) => {}
});

const ExpensesReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [...state, {...payload, id}];
        case 'UPDATE':
            const newExpensesArr = [...state];
            const index = state.findIndex(expense => expense.id === payload.id);
            newExpensesArr[index] = {...newExpensesArr[index], ...payload.expenseData};
            return newExpensesArr;
        case 'DELETE':
            return state.filter(expense => expense.id !== payload);
        default:
            return state;
    }
};

const ExpensesContextProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(ExpensesReducer, dummyExpenses);

    const addExpense = expenseData => {
        dispatch({type: 'ADD', payload: expenseData});
    };

    const deleteExpense = id => {
        dispatch({type: 'DELETE', payload: id});
    };

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id, expenseData}});
    };

    const value = {expenses, addExpense, updateExpense, deleteExpense};

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
