import React from 'react';
import TodosContext from 'contexts/TodosContext/TodosContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTodo = ({ todoList, color }) => {
	const { addTodo } = React.useContext(TodosContext);

	const [ todoName, setTodoName ] = React.useState('');

	const style = {
		display: 'inline-flex',
	};

	return (
		<React.Fragment>
			<form
				style={style}
				noValidate
				autoComplete="off"
				onSubmit={(event) => {
					event.preventDefault();
					addTodo(todoList.id, todoName);
					setTodoName('');
				}}
			>
				<TextField
					id="standard-name"
					value={todoName}
					onChange={(event) => {
						setTodoName(event.target.value);
					}}
					placeholder={todoList.list_name}
					margin="normal"
					label="New todo…"
				/>
				<Button
					type="submit"
					style={{
						alignSelf: 'center',
						color,
					}}
				>
					Add
				</Button>
			</form>
		</React.Fragment>
	);
};

export default AddTodo;

// const old = () => {
// 	return (
// 		<React.Fragment>
// 			<div>Hello AddTodo</div>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					placeholder="Add todo…"
// 					value={todoName}
// 					onChange={(event) => setTodoName(event.target.value)}
// 				/>
// 				<button type="submit">AddTodo</button>
// 				{todoName}
// 			</form>
// 		</React.Fragment>
// 	)
// }
