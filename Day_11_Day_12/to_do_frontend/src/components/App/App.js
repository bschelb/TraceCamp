import React from 'react';
import { Route } from 'react-router-dom';
import TodosPage from 'components/TodosPage/TodosPage';
// import TodosContext from 'contexts/TodosContext/TodosContext';

const App = () => {
	return <Route path="/" component={TodosPage} />;
	// <Route path="/" component={TodosPage} />;
};

export default App;
