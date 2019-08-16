import React from 'react';
import axios from 'axios';

import useArray from 'hooks/useArray/useArray';

const hostName = 'http://localhost:8000';

const TodosContext = React.createContext();
export default TodosContext;

export const TodosProvider = (props) => {
	const [ todoLists, todoListsActions ] = useArray();
	React.useEffect(
		() => {
			axios.get(`${hostName}/list/`).then((response) => {
				todoListsActions.set(response.data);
			});
		},
		[ todoListsActions ],
	);

	const [ todoItems, todoItemsActions ] = useArray();
	React.useEffect(
		() => {
			axios.get(`${hostName}/view_todos/`).then((response) => {
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
				.post(`${hostName}/create/`, {
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
				.post(`${hostName}/single_todo/`, {
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
			axios.get(`${hostName}/delete/${todoListId}/`, {
				id: todoListId,
			});
			todoListsActions.filter((todoList) => todoList.id !== todoListId);
		},

		removeTodo: (todoTaskId, todoListId) => {
			axios.delete(`${hostName}/single_todo/${todoTaskId}/`, {
				id: todoTaskId,
				todo_list: todoListId,
			});
			const todoIndex = todoItems.findIndex(
				(todoItems) => todoItems.id === todoTaskId,
			);
			const todolist = todoLists.find(
				(todoList) => todoList.id === todoListId,
			);
			const todoListIndex = todoLists.findIndex(
				(todoList) => todoList.id === todoListId,
			);
			const newTodos = todoItems.filter(
				(todoItems) =>
					todoItems.todo_list === todoListId &&
					todoItems.id !== todoTaskId,
			);
			todoListsActions.replace(todoListIndex, {
				...todolist,
				items: newTodos,
			});
			todoItemsActions.remove(todoIndex);
		},

		editTodo: (updatedContent, todoTaskId, todoListId) => {
			axios
				.put(`${hostName}/single_todo/${todoTaskId}/`, {
					todo_task: updatedContent,
					id: todoTaskId,
					todo_list: todoListId,
				})
				.then((response) => {
					//todoItems
					const updatedTodo = response.data;
					const todoIndex = todoItems.findIndex(
						(todoItems) => todoItems.id === todoTaskId,
					);
					todoItemsActions.replace(todoIndex, updatedTodo);
					//todoLists
					const todoListIndex = todoLists.findIndex(
						(todoList) => todoList.id === todoListId,
					);
					const todolist = todoLists.find(
						(todoList) => todoList.id === todoListId,
					);

					const updatedTodos = todolist.items.map((todoItem) => {
						if (todoItem.id === updatedTodo.id) {
							return updatedTodo;
						}
						return todoItem;
					});
					todoListsActions.replace(todoListIndex, {
						...todolist,
						items: updatedTodos,
					});
				});
		},

		editTodoList: (newListName, todoListId) => {
			const todoList = todoLists.find(
				(todoList) => todoList.id === todoListId,
			);
			axios.patch(`${hostName}/detail/${todoListId}/`, {
				list_name: newListName,
				id: todoListId,
				items: todoList.items,
			});
			const todoListIndex = todoLists.findIndex(
				(todoList) => todoList.id === todoListId,
			);
			todoListsActions.replace(todoListIndex, {
				...todoList,
				list_name: newListName,
			});
		},
	};

	return (
		<TodosContext.Provider value={value}>
			{props.children}
		</TodosContext.Provider>
	);
};
