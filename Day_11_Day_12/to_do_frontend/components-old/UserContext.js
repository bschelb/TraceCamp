import React from 'react';
const axios = require('axios');

const UserContext = React.createContext();
export default UserContext;

export const UserProvider = (props) => {
    const [ user, setUser ] = React.useState({});
    const value = {
        user,
        setUser,
        login: (username, password) => {
            React.setState({
                username: 'bschelb',
                password: '1234',
                id: 1,
            });
        },
        logout: () => {
            setUser({})
        }
    }
    return(
    <UserContext.Provider value={value}>
    {props.children}
    </UserContext.Provider>
    )
}