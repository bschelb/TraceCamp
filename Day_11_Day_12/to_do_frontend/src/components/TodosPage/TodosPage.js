import React from 'react';
import TodosContext from 'contexts/TodosContext/TodosContext';
import AddTodoList from 'components/AddTodoList/AddTodoList';
// import AddTodo from 'components/AddTodo/AddTodo';
import { makeStyles } from '@material-ui/core/styles';
import Todos from 'components/Todos/Todos';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const TodosPage = () => {
	const classes = useStyles();

	const { todoLists } = React.useContext(TodosContext);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{todoLists ? (
					todoLists.map((todoList, index) => {
						return (
							<Todos
								key={todoList.id}
								todoList={todoList}
								index={index}
							/>
						);
					})
				) : null}
				<Grid item xs={12} sm={6}>
					<AddTodoList />
				</Grid>
			</Grid>
		</div>
	);
};

export default TodosPage;
