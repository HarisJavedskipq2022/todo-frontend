import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import * as todoApi from "../api/todos";
import {
	addTodoSuccess,
	fetchTodosFailure,
	fetchTodosSuccess,
	updateTodoFailure,
	updateTodoSuccess,
	deleteTodoSuccess,
	requestStarted,
	requestFailed,
} from "../store/todo/todoSlice";

function TodoContainer() {
	const dispatch = useDispatch();
	const {
		data: todos,
		isLoading,
		error,
	} = useSelector((state) => state.todo);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("pending");

	const fetchTodos = useCallback(async () => {
		dispatch(requestStarted());
		try {
			const response = await todoApi.fetchTodos();
			dispatch(fetchTodosSuccess(response.data.data));
		} catch (err) {
			dispatch(fetchTodosFailure(err.message));
		}
	}, [dispatch]);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const handleCreate = async (e) => {
		e.preventDefault();
		dispatch(requestStarted());
		try {
			const response = await todoApi.createTodo({
				title,
				description,
				status,
			});
			dispatch(addTodoSuccess(response.data.data));
			setTitle("");
			setDescription("");
			setStatus("pending");
		} catch (err) {
			console.error("Failed to add todo:", err);
			dispatch(requestFailed(err.message));
		}
	};

	const handleUpdate = async (
		id,
		updatedTitle,
		updatedDescription,
		updatedStatus
	) => {
		dispatch(requestStarted());
		try {
			const response = await todoApi.updateTodo(id, {
				title: updatedTitle,
				description: updatedDescription,
				status: updatedStatus,
			});
			dispatch(updateTodoSuccess(response.data.data));
		} catch (err) {
			console.error("Failed to update todo:", err);
			dispatch(updateTodoFailure(err.message));
		}
	};

	const handleDelete = async (id) => {
		dispatch(requestStarted());
		try {
			await todoApi.deleteTodo(id);
			dispatch(deleteTodoSuccess({ id }));
		} catch (err) {
			console.error("Failed to delete todo:", err);
			dispatch(requestFailed(err.message));
		}
	};

	if (isLoading)
		return (
			<div className="min-h-screen flex items-center justify-center">
				<RingLoader color="#123abc" size={60} />
			</div>
		);
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="p-4">
			<TodoForm
				title={title}
				setTitle={setTitle}
				description={description}
				setDescription={setDescription}
				status={status}
				setStatus={setStatus}
				onSubmit={handleCreate}
			/>
			<div className="mt-4">
				<TodoList
					todos={todos}
					onUpdate={handleUpdate}
					onDelete={handleDelete}
				/>
			</div>
		</div>
	);
}

export default TodoContainer;
