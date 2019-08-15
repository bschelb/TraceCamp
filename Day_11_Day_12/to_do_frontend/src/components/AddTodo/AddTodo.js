import React from 'react';

const AddTodo = () => {
	const [ todoName, setTodoName ] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<React.Fragment>
			<div>Hello AddTodo</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add todo…"
					value={todoName}
					onChange={(event) => setTodoName(event.target.value)}
				/>
				<button type="submit">AddTodo</button>
				{todoName}
			</form>
		</React.Fragment>
	);
};

export default AddTodo;
