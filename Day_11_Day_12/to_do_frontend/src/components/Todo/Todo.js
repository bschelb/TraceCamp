import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import TodosContext from 'contexts/TodosContext/TodosContext';
// import AddTodo from 'components/AddTodo/AddTodo';
// import colors from 'utilities/colors';

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
				style={{ whiteSpace: 'nowrap' }}
			>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<TextField
							id="standard-name"
							label={
								todo.todo_task === todoTask ? (
									'Todo:'
								) : (
									'Press Enter To Save Edit'
								)
							}
							value={todoTask}
							onChange={(event) => {
								setTodoTask(event.target.value);
							}}
							placeholder="Press Enter To Save Edit"
							fullWidth
							margin="normal"
						/>
					</Grid>
					<Grid item style={{ display: 'inline-flex' }} xs={1}>
						<Chip
							size="small"
							label="✓"
							onClick={() => removeTodo(todo.id, todoListId)}
							style={{
								alignSelf: 'center',
								color: 'white',
								backgroundColor: color,
								justify: 'center',
								align: 'center',
							}}
						/>
					</Grid>
				</Grid>
			</form>
		</Typography>
	);
};

export default Todo;
