import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchTodos = async () => {
	return await axios.get(`${BASE_URL}/todo`);
};

export const createTodo = async (todo) => {
	return await axios.post(`${BASE_URL}/todo`, todo);
};

export const updateTodo = async (id, todo) => {
	return await axios.put(`${BASE_URL}/todo/${id}`, todo);
};

export const deleteTodo = async (id) => {
	return await axios.delete(`${BASE_URL}/todo/${id}`);
};
