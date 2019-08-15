import React, { useState } from "react";
import { createList, deleteList, detailList, updateList } from "../apiservice";
import UserContext  from './UserContext'
import Axios from "axios";
       // const value = 
      // [
    //         {
    //           username: "test",
    //           email: "test@email.com",
    //           password: "",
    //           userId: 1,
    //           todoLists: [
    //               {
    //                    id: 1, 
    //                   title: "TestTitle", 
    //                   userId: 1, 
    //                     todoItems: [
    //                         { 
    //                             content: "Task 1",
    //                             id: "1"
    //                         }
    //                     ]
    //                 },
    //             ]
    //         }
    //     ]



const actionTypes = {
    ADD_LIST: 'ADD_LIST',
    REMOVE_LIST: 'REMOVE_LIST',
    DELETE_LIST: 'DELETE_LIST',
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    UPDATE_LIST: 'UPDATE_LIST',
    DISPLAY_LIST: 'DISPLAY_LIST',
    LOGIN: 'LOGIN'
};

const addList = (state, action) => {
    console.log('addList')
    return [...state, action.payload]
  };
  
  // const action = {
  //   type: actionTypes.REMOVE_LIST,
  //   payload: {
  //     id,
  //   }
  // }
  
  // const removeList = (state, action) => {
  //   return deleteList(id);
  // };
  
  // const action = {
  //   type: actionTypes.CLEAR_LIST,
  //   payload: {
  //     id,
  //   }
  // }
  
//   const clearList = (state, action) => {
//     return state.map((todoList, index) => {
//       if (todoList.id !== action.payload.id) return todoList;
  
//       const emptyTodoList = {
//         ...state[index],
//         todoItems: [],
//       };
//       return emptyTodoList;
//     });
//   };
  
  // const action = {
  //   type: actionTypes.ADD_TODO,
  //   payload: {
  //     listId,
  //     todo: {
  //       id: Math.random(),
  //       text: text
  //     },
  //   }
  // }
  
  const addTodo = (state, action) => {
    return state.map((todoList, index) => {
      if (todoList.id !== action.payload.listId) return todoList;
  
      const updatedTodoList = {
        ...state[index],
        todoItems: [
          ...state[index].todoItems,
          action.payload.todo,
        ],
      };
      return updatedTodoList;
    });
  };
  
  // const action = {
  //   type: actionTypes.REMOVE_TODO,
  //   payload: {
  //     listId,
  //     todoId,
  //   }
  // }
  
  // const removeTodo = (state, action) => {
  //   return state.map((todoList, index) => {
  //     if (todoList.id !== action.payload.listId) return todoList;
  
  //     const updatedTodoList = {
  //       ...state[index],
  //         todoItems: state[index].todoItems.filter(
  //           todoItem => todoItem.id !== action.payload.todoId),
  //     };
  //     return updatedTodoList;
  //   });
  // };

  // const displayList = (state, action) => {
  //     return detailList(todoList.id)
  // }

  // const listUpdate = (state, action) => {
  //   newList = [...state, action.payload]
  //     return updateList(newList, todoList.id)
  // }
  
  const reducer = (state, action) => {
    switch (action.type) {
        // case actionTypes.UPDATE_LIST:
        //     return listUpdate(state, action);
        case actionTypes.ADD_LIST:
          console.log('ADD_LIST')
            return addList(state, action);
        // case actionTypes.REMOVE_LIST:
        //     return removeList(state, action);
        // case actionTypes.CLEAR_LIST:
        //     return clearList(state, action);
        case actionTypes.ADD_TODO:
            return addTodo(state, action);
        // case actionTypes.REMOVE_TODO:
        //     return removeTodo(state, action);
        // case actionTypes.DISPLAY_LIST:
        //     return displayList(state, action);
        default:
            return state;
    }
  };

const initialState = []

const TodosContext = React.createContext({
    state: {},
    dispatch: () => {},
    addList: todoListName => {},
    removeList: id => {},
    clearList: id => {},
    addListItem: (listId, todoText) => {},
    removeListItem: (listId, todoId) => {},
    listUpdate: (listId) => {},
    displayList: (listId) => {},
});
export default TodosContext;

export const TodosProvider = props => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    const { user, setUser } = React.useContext(UserContext)
    const [ list, setList ] = React.useState({})

    const value = {
        state,
        dispatch,
        addList: (todoListName) => {
          let action ={
            type: actionTypes.ADD_LIST,
            payload: {
              userid: 'user.id',
              todoList:
                [{
                  listId: 0,
                  name: 'todoListName',
                  todoItems: [],
                  },
                ]
  
            }
          }
          return dispatch(action);
        },
        removeList: (id) => {
          dispatch({
          type: actionTypes.REMOVE_LIST,
          payload: {
            id,
          }
        })},

        // clearList: (id) => {
        //   dispatch({
        //     type: actionTypes.CLEAR_LIST,
        //     payload: {
        //       id,
        //     }
        //   })
        // },

        addListItem: (listId, todoText) => {
          dispatch({
            type: actionTypes.ADD_TODO,
            payload: {
              listId,
              todo: {
                content: todoText,
                id: 0,
              },
            },
          });
        },
        removeListItem: (listId, todoId) => {
          dispatch({
            type: actionTypes.REMOVE_TODO,
            payload: {
              listId,
              todoId,
            }
          })
        },
        
        // listUpdate: (listId) => {
        //     dispatch({
        //         type: actionTypes.UPDATE_LIST,
        //         payload: {
        //             listId,
        //         }
        //     })
        // }
    };
  return (
  <TodosContext.Provider value={value}>
  {props.children}
  </TodosContext.Provider>
  );
};














































// const ListContext = React.createContext([{}, () => {}]);

// export default ListContext;

// export const ListProvider = (props) => {
//     const [ value, setValue ] = useState(
//     
// );
//     return(
//         <ListContext.Provider value={[ value, setValue ]}>
//             { props.children }
//         </ListContext.Provider>
//     );
// };

// // listtaskuserid: "testlisttaskuserID"
// // listtaskid: "testlisttaskID",