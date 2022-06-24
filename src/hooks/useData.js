import { useState, useEffect } from "react";

import { handler as axios } from "../axios";

export const useData = (todoId) => {
  console.log(todoId);
  const [todo, setTodo] = useState(null);

  async function fetchTodo() {
    try {
      const response = await axios.get(todoId + "");
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, [todoId]);

  return { todo };
};
