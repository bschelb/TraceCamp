import React from 'react';
import axios from 'axios';

import useArray from 'hooks/useArray/useArray';

const TodosContext = React.createContext();
export default TodosContext;

export const TodosProvider = (props) => {
	const [ todoLists, todoListsActions ] = useArray();
	React.useEffect(
		() => {
			axios.get('http://127.0.0.1:8000/list/').then((response) => {
				todoListsActions.set(response.data);
			});
		},
		[ todoListsActions ],
	);

	const [ todoItems, todoItemsActions ] = useArray();
	React.useEffect(
		() => {
			axios.get('http://127.0.0.1:8000/view_todos/').then((response) => {
				todoItemsActions.set(response.data);
			});
		},
		[ todoItemsActions ],
	);

	const value = {
		todoItems,
		todoLists,

		addTodoList: (todoListName) => {
			axios
				.post('http://127.0.0.1:8000/create/', {
					list_name: todoListName,
					items: [],
					listuserid: 1,
				})
				.then((response) => {
					const todo_list = response.data;
					todoListsActions.push(todo_list);
				});
		},

		addTodo: (todoListId, todoTask) => {
			axios
				.post('http://127.0.0.1:8000/single_todo/', {
					todo_task: todoTask,
					todo_list: todoListId,
				})
				.then((response) => {
					// todoItems
					const todo = response.data;
					todoItemsActions.push(todo);

					// todoLists
					const todoListIndex = todoLists.findIndex(
						(todoList) => todoList.id === todo.todo_list,
					);
					const todoList = todoLists.find(
						(todoList) => todoList.id === todo.todo_list,
					);
					todoListsActions.replace(todoListIndex, {
						...todoList,
						items: [ ...todoList.items, todo ],
					});
				});
		},

		removeTodoList: (todoListId) => {
			axios.get(`http://127.0.0.1:8000/delete/${todoListId}/`, {
				id: todoListId,
			});
			todoListsActions.filter((todoList) => todoList.id !== todoListId);
			// const todoListDeleted = todoLists.find(
			// 	(todoList) => todoList.id === todoListId,
			// );
			// const todoListIndex = todoLists.findIndex(
			// 	(todoList) => todoList.id === todoListId,
			// );
			// todoListsActions.delete(todoListIndex);
		},

		removeTodo: () => {},

		editTodo: () => {},

		editTodoList: () => {},
	};

	// data:
	// 	id: 26
	// 	todo_list: 10
	// 	todo_task: "Fix the api"
	// 	__proto__: Object

	return (
		<TodosContext.Provider value={value}>
			{props.children}
		</TodosContext.Provider>
	);
};
