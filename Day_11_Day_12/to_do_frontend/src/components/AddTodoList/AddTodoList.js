import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TodosContext from 'contexts/TodosContext/TodosContext';
import colors from 'utilities/colors';
import TextField from '@material-ui/core/TextField';

const headingStyle = {
	position: 'absolute',
	bottom: '10px',
	left: '10px',
	color: 'white',
};

const AddToDoList = () => {
	const { addTodoList, todoLists } = React.useContext(TodosContext);

	const [ todoListName, setTodoListName ] = React.useState('');
	// const onSubmit = (event) => {
	// 	event.preventDefault();
	// };

	const color =
		colors[(todoLists ? todoLists.length + 1 : 1) % colors.length];

	return (
		<React.Fragment>
			<Card>
				{/* <CardActionArea> */}
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
								addTodoList(todoListName);
								setTodoListName('');
							}}
						>
							<TextField
								id="standard-name"
								label="New todolist…"
								value={todoListName}
								onChange={(event) => {
									setTodoListName(event.target.value);
								}}
								placeHolder="New todolist…"
								margin="normal"
							/>
						</form>
					</div>
				</div>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{/* Congrats! No tasks */}
					</Typography>
				</CardContent>
				{/* </CardActionArea> */}
				<CardActions>
					<Button
						size="small"
						style={{
							color,
						}}
						onClick={(event) => {
							event.preventDefault();
							addTodoList(todoListName);
							setTodoListName('');
						}}
					>
						Add List
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	);
};

export default AddToDoList;

// const old = () => {
// 	return (
// 		<React.Fragment>
// 			<div>Hello from AddToDoList</div>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					type="text"
// 					placeholder="Add todo list…"
// 					value={todoListName}
// 					onChange={(event) => setTodoListName(event.target.value)}
// 				/>
// 				<button type="submit">AddTodoList</button>
// 				{todoListName}
// 			</form>
// 		</React.Fragment>
// 	);
// };
