import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from 'contexts/UserContext/UserContext';
import { TodosProvider } from 'contexts/TodosContext/TodosContext';
import App from 'components/App/App';

const root = (
	<Router>
		<UserProvider>
			<TodosProvider>
				<App />
			</TodosProvider>
		</UserProvider>
	</Router>
);
ReactDOM.render(root, document.getElementById('root'));
