import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      {props.task.map((myTask) => (
        <TodoItem
          task={myTask.title}
          id={myTask.id}
          key={myTask.id}
          onDelete={props.onDeleteItem}
        />
      ))}
    </div>
  );
};
export default TodoList;
