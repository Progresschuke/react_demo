import React, { useState } from 'react';
import './App.css';
import UserInputForm from './UserInput/Form/UserInputForm';
import UserInputList from './UserInput/List/UserInputList';
// import NewTodo from './TodoForm/NewTodo';
// import TodoList from './TodoList/TodoList';

// const TODOS = [
//   {
//     id: 'e1',
//     title: 'Learn React',
//   },
//   {
//     id: 'e2',
//     title: 'Go to Shopping',
//   },
//   {
//     id: 'e3',
//     title: 'Meet the Dentist',
//   },
//   {
//     id: 'e4',
//     title: 'Plan Weekly Foodtable',
//   },
//   {
//     id: 'e5',
//     title: 'Start Journaling',
//   },
// ];

// const App = () => {
//   const [myTodos, setMyTodos] = useState(TODOS);

//   const addGoalHandler = (todoTask) => {
//     // console.log(todoTask);
//     setMyTodos((prevTodoTask) => {
//       const updatedGoals = [...prevTodoTask];
//       updatedGoals.unshift(todoTask);
//       return updatedGoals;

//       // return [todoTask, ...prevTodoTask];
//     });
//   };

//   const deleteHandler = (todoId) => {
//     setMyTodos((prevTodoTask) => {
//       const updatedGoals = prevTodoTask.filter((todo) => todo.id !== todoId);
//       console.log(todoId);
//       return updatedGoals;
//     });
//   };

//   let content = (
//     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//   );

//   if (myTodos.length > 0) {
//     content = <TodoList task={myTodos} onDeleteItem={deleteHandler} />;
//   }

//   return (
//     <div className='App'>
//       <NewTodo onAddGoal={addGoalHandler} />
//       {content}
//     </div>
//   );
// };

const App = () => {
  const [details, setDetails] = useState('');
  const addUserInputHandler = (userInput) => {
    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails.unshift(userInput);
      return updatedDetails;
    });

    console.log(userInput);
  };
  //   const addGoalHandler = (todoTask) => {
  //     // console.log(todoTask);
  //     setMyTodos((prevTodoTask) => {
  //       const updatedGoals = [...prevTodoTask];
  //       updatedGoals.unshift(todoTask);
  //       return updatedGoals;

  //       // return [todoTask, ...prevTodoTask];
  //     });
  //   };

  let content = (
    <p style={{ textAlign: 'center' }}>No User found. Add User details</p>
  );

  if (details.length > 0) {
    content = <UserInputList userInputs={details} />;
  }

  return (
    <div>
      <section className='user-form'>
        <UserInputForm onAddUserInput={addUserInputHandler} />
      </section>
      <section className='user-details'>{content}</section>
    </div>
  );
};

export default App;
