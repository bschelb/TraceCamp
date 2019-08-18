import React from 'react';
import { Route } from 'react-router-dom';
import TodosPage from 'components/TodosPage/TodosPage';

const App = () => {
	return <Route path="/" component={TodosPage} />;
};

export default App;
