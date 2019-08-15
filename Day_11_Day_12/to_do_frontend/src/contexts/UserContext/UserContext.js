import React from 'react';

const UserContext = React.createContext();
export default UserContext;

export const UserProvider = (props) => {
	const value = {};

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};
