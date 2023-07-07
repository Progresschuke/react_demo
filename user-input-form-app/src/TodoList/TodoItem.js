import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='todo-item' onClick={deleteItemHandler}>
      {props.task}
    </div>
  );
};

export default TodoItem;
