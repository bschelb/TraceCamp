import React from 'react';
import { Route } from 'react-router-dom';
import TodosPage from 'components/TodosPage/TodosPage';
import TodosContext from 'contexts/TodosContext/TodosContext';

const App = () => {
	const todosContext = React.useContext(TodosContext);

	return (
		<React.Fragment>
			<Route path="/" component={TodosPage} />
			<button
				onClick={() => {
					todosContext.addTodoList('react_list-2');
				}}
			>
				TEST
			</button>
			<pre>{JSON.stringify(todosContext.todoLists, null, 2)}</pre>
			{/* <pre>{JSON.stringify(todosContext.todoItems, null, 2)}</pre> */}
		</React.Fragment>
	);
};

export default App;
