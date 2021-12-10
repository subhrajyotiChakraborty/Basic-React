import axios from "axios";

export const handler = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
});
