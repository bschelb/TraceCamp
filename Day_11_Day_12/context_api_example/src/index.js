import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodosProvider } from './components/TodosContext'

const root = (
    <TodosProvider>
        <App />
    </TodosProvider>
)
ReactDOM.render(root, document.getElementById('root'));

