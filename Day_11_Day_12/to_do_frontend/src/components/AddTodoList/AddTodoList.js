import React from 'react';

const AddToDoList = () => {
	const [ todoListName, setTodoListName ] = React.useState('');
	const onSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<React.Fragment>
			<div>Hello from AddToDoList</div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Add todo list…"
					value={todoListName}
					onChange={(event) => setTodoListName(event.target.value)}
				/>
				<button type="submit">AddTodoList</button>
				{todoListName}
			</form>
		</React.Fragment>
	);
};

export default AddToDoList;
