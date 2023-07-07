import React from 'react';
import UserInputItem from '../Item/UserInputItem';

const UserInputList = (props) => {
  return (
    <div>
      {props.userInputs.map((userInput) => (
        <UserInputItem
          username={userInput.username}
          userAge={userInput.userAge}
        />
      ))}
    </div>
  );
};

export default UserInputList;
