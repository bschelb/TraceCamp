import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

import TodosContext from 'contexts/TodosContext/TodosContext';
import AddTodo from 'components/AddTodo/AddTodo';
import colors from 'utilities/colors';
import Todo from 'components/Todo/Todo';

const headingStyle = {
	position: 'absolute',
	bottom: '10px',
	left: '10px',
	color: 'white',
};

const Todos = ({ todoList, index }) => {
	const {
		removeTodoList,
		// removeTodo,
		editTodoList,
		// editTodo,
	} = React.useContext(TodosContext);
	const color = colors[index % colors.length];

	const [ todoName, setTodoName ] = React.useState(todoList.list_name);
	// const [ todoTask, setTodoTask ] = React.useState(todoList.items.todo_task);

	return (
		<Grid key={todoList.id} item xs={12} sm={6}>
			<Card>
				<div
					style={{
						height: '140px',
						backgroundColor: color,
						position: 'relative',
					}}
				>
					<div style={headingStyle}>
						<form
							noValidate
							autoComplete="off"
							onSubmit={(event) => {
								event.preventDefault();
								editTodoList(todoName, todoList.id);
							}}
						>
							<TextField
								id="standard-name"
								label={
									todoList.list_name === todoName ? (
										'Todo List'
									) : (
										'Press Enter To Save'
									)
								}
								value={todoName}
								onChange={(event) => {
									setTodoName(event.target.value);
								}}
								placeholder={todoList.list_name}
								margin="normal"
								fullWidth
							/>
						</form>
					</div>
				</div>
				<CardContent>
					{todoList.items.length !== 0 ? (
						todoList.items.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								color={color}
								todoListId={todoList.id}
							/>
						))
					) : (
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Congrats! No tasks
						</Typography>
					)}
					<AddTodo todoList={todoList} color={color} />
				</CardContent>
				<CardActions>
					<Button
						size="small"
						style={{
							color,
						}}
						onClick={() => removeTodoList(todoList.id)}
					>
						Delete List
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Todos;
