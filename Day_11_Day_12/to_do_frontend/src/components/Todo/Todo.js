import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

import TodosContext from 'contexts/TodosContext/TodosContext';
import AddTodo from 'components/AddTodo/AddTodo';
import colors from 'utilities/colors';

const Todo = ({ todo, todoListId, color }) => {
	const { removeTodo, editTodo } = React.useContext(TodosContext);

	const [ todoTask, setTodoTask ] = React.useState(todo.todo_task);

	return (
		<Typography
			key={todo.id}
			variant="body2"
			color="textSecondary"
			component="p"
		>
			<form
				noValidate
				autoComplete="off"
				onSubmit={(event) => {
					event.preventDefault();
					editTodo(todoTask, todo.id, todo.todo_list);
				}}
			>
				<TextField
					id="standard-name"
					label={
						todo.todo_task === todoTask ? (
							'TodoTask'
						) : (
							todo.todo_task
						)
					}
					value={todoTask}
					onChange={(event) => {
						setTodoTask(event.target.value);
					}}
					placeholder={todo.todo_task}
					margin="normal"
				/>
				<Chip
					size="small"
					label="✖"
					onClick={() => removeTodo(todo.id, todoListId)}
					style={{
						color: 'white',
						backgroundColor: color,
						margin: '10px',
						marginTop: '33px',
					}}
				/>
			</form>
		</Typography>
	);
};

export default Todo;
