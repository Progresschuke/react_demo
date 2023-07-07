import React from 'react';
import './UserInputItem.css';

const UserInputItem = (props) => {
  return (
    <div className='user-item'>
      <div className='user-item_controls'>
        <span>{props.username}</span>
        <span> {props.userAge}</span>
      </div>
    </div>
  );
  //   const addUserInput = (enteredItem) => {
  //     const userItem = {
  //       ...enteredItem,
  //       id: Math.random().toString(),
  //     };
  //     return userItem;
  //   };
  //   return (
  //     <div>
  //       <UserInputForm onAddUserInput={addUserInput} />
  //     </div>
  //   );
};

export default UserInputItem;
