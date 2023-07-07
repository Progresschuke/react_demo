import React, { useState } from 'react';
import styles from './UserInputForm.module.css';

const UserInputForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const usernameHandler = (event) => {
    if (event.target.value.trim().length > 2) {
      setIsValid(true);
    }
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const userAgeHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsValid(true);
    // }

    console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    const finalName = enteredName.trim().length;
    // const finalAge = enteredAge.trim().length;

    event.preventDefault();
    const userInput = {
      username: enteredName,
      userAge: '(' + enteredAge + ' years old)',
    };

    if (finalName <= 2) {
      setIsValid(false);
      return;
    }
    console.log(userInput);
    props.onAddUserInput(userInput);

    setEnteredAge('');
    setEnteredName('');
  };

  //   return (
  //     <form onSubmit={submitFormHandler} className ='form - user'>
  //       <div className='form-user_controls'>
  //         <div className={`form-user_controls_name ${!isValid ? 'invalid' : ''}`}>
  //           <label>Username</label>
  //           <input type='text' onChange={usernameHandler} />
  //         </div>
  //         <div>
  //           <label>Age (Years)</label>
  //           <input type='number' min={18} onChange={userAgeHandler} />
  //         </div>
  //         <div>
  //           <button type='submit'>Add User</button>
  //         </div>
  //       </div>
  //     </form>
  //   );
  // };

  return (
    <form onSubmit={submitFormHandler} className={styles['form-user']}>
      <div className={styles['form-user_controls']}>
        <div
          className={`${styles['form-user_controls_name']} ${
            !isValid && styles.invalid
          }`}
        >
          <label>Username</label>
          <input type='text' onChange={usernameHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type='number' min={18} onChange={userAgeHandler} />
        </div>
        <div>
          <button type='submit'>Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UserInputForm;
