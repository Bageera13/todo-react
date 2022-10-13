import React, { useState } from "react";
import { postTodoItem } from "../../service";

export function useInputValue (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function TodoCreateItem ({ onCreate }) {
  const input = useInputValue('')

  function submitHandler (event) {
    event.preventDefault()
    postTodoItem(input.value())
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form className="formCreate" onSubmit={submitHandler}>
      <input className="inputCreate" placeholder="Чем займемся?" {...input.bind} />
      <button className="btnCreate btn" type='submit'>Создать дело</button>
    </form>
  )
}

export default TodoCreateItem