import {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
    expenses: {data: [], loading: false, error: false},
    setExpense: expenseData => {},
    addExpense: expenseData => {},
    deleteExpense: id => {},
    updateExpense: (id, expenseData) => {},
    toggleLoading: loadingState => {},
    toggleError: errorState => {}
});

const ExpensesReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'SET':
            return {...state, data: payload.reverse()};
        case 'ADD':
            return {...state, data: [payload, ...state.data]};
        case 'UPDATE':
            const newExpensesArr = [...state.data];
            const index = state.data.findIndex(expense => expense.id === payload.id);
            newExpensesArr[index] = {...newExpensesArr[index], ...payload.expenseData};
            return {...state, data: newExpensesArr};
        case 'DELETE':
            return {...state, data: state.data.filter(expense => expense.id !== payload)};
        case 'LOADING':
            return {...state, loading: payload};
        case 'ERROR':
            return {...state, error: payload};
        default:
            return state;
    }
};

const ExpensesContextProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(ExpensesReducer, {
        data: [],
        loading: false,
        error: false
    });

    const toggleError = errorState => {
        dispatch({type: 'ERROR', payload: errorState});
    };

    const toggleLoading = loadingState => {
        dispatch({type: 'LOADING', payload: loadingState});
    };

    const setExpense = expenseData => {
        dispatch({type: 'SET', payload: expenseData});
    };

    const addExpense = expenseData => {
        dispatch({type: 'ADD', payload: expenseData});
    };

    const deleteExpense = id => {
        dispatch({type: 'DELETE', payload: id});
    };

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id, expenseData}});
    };

    const value = {
        expenses,
        setExpense,
        addExpense,
        updateExpense,
        deleteExpense,
        toggleLoading,
        toggleError
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
