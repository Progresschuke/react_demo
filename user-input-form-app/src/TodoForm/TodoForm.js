import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isValid, setIsValid] = useState(true);

  const changTitleHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setIsValid(false);
    }

    const todoTask = {
      title: enteredTitle,
    };

    if (enteredTitle.trim().length === 0) {
      return;
    }
    props.onSubmitForm(todoTask);
    setEnteredTitle('');
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className='todo-form_controls'>
        <div className={`todo-form_control ${!isValid ? 'invalid' : ''}`}>
          <label>Course Goal</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={changTitleHandler}
          />
          <div className='todo-form_button'>
            <button type='submit'>Add Goal</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
