import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { TodosProvider } from "./components/ListContext";
import { UserProvider } from "./components/UserContext";

const root = (
    <UserProvider>
        <TodosProvider>
             <App />
        </TodosProvider>
    </UserProvider>
)
ReactDOM.render(root, document.getElementById('root'));