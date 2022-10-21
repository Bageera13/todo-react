import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useInputValue} from './TodoCreateItem'

function TodoItem ({ todo, index, onChange, deleteTodo }) {
  const classes = ['todoListItem']
  const [isDisabled, setIsDisabled] = useState(false)
  const input = useInputValue(todo.title)

  const editHandler = () => {
    setIsDisabled(prevState => !prevState)
  }

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li className={classes.join(' ')}>
      <div>
        <input type='checkbox' disabled={isDisabled} checked={todo.completed} onChange={() => onChange(todo.id)} />
        <strong> {index + 1} </strong>
        &nbsp;
        {!isDisabled ? input.value() : <input {...input.bind} type='text' onBlur={editHandler} />}
      </div>

      <div className="ItemBtnGroup">
        <button className="btnEditItem btn" onClick={editHandler}></button>
        <button className='btnItem btn' onClick={() => deleteTodo(todo.id)}> &times; </button>
      </div>
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default  TodoItem