import React from 'react';
import TodosContext from 'contexts/TodosContext/TodosContext';
import AddTodoList from 'components/AddTodoList/AddTodoList';
// import AddTodo from 'components/AddTodo/AddTodo';
import { makeStyles } from '@material-ui/core/styles';
import Todos from 'components/Todos/Todos';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import colors from 'utilities/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		appbar: {
			alignItems: 'center',
		},
	},
}));

const TodosPage = ({ index }) => {
	const classes = useStyles();
	const color = colors[index % colors.length];

	const { todoLists } = React.useContext(TodosContext);

	return (
		<React.Fragment>
			<div className={classes.root} style={{ marginBottom: '20px' }}>
				<AppBar
					position="static"
					color={color}
					className={classes.appbar}
				>
					<Toolbar position="center">
						<Typography variant="h6" color="inherit">
							ToDo's
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
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
		</React.Fragment>
	);
};

export default TodosPage;
