import React from 'react';
import AddTodoList from 'components/AddTodoList/AddTodoList';
import AddTodo from 'components/AddTodo/AddTodo';

const TodosPage = () => {
	return (
		<React.Fragment>
			<div>Hello TodosPage</div>
			<AddTodoList />
			<AddTodo />
		</React.Fragment>
	);
};

export default TodosPage;
