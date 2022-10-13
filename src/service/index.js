let base64 = require('base-64');

const baseUrl = "https://todo.stage-uchi.ru";

export const getTodosList = () => {
  return fetch("http://todo.stage-uchi.ru/api/v1/tasks", {
  mode: "no-cors",
  credentials: "include",
  headers: {
    Authorization: "Basic " + base64.encode(`uchi:uchi`),
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
  }
})
  .then((data) => {return data.json()})
  .then((todos) => {console.log(todos)})
  .catch((err) => {
    console.warn("bad", err);
  });
}

export const postTodoItem = (text) => {
  return fetch(`${baseUrl}/api/v1/tasks`, {
    headers: {
      'Authorization': "Basic " + base64.encode(`uchi:uchi`),
      'accept': `*/*`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'no-cors',
    credentials: 'include',
    body: JSON.stringify({
      completed: true,
      text: text,
    }),
  })
}