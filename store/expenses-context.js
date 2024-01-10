import {createContext, useReducer} from 'react';
import dummyExpenses from '../dummy-data';

export const ExpensesContext = createContext();

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

    const updateExpense = id => {
        dispatch({type: 'UPDATE', payload: id});
    };

    const deleteExpense = (id, expenseData) => {
        dispatch({type: 'DELETE', payload: {id, expenseData}});
    };

    const value = {expenses, addExpense, updateExpense, deleteExpense};

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
