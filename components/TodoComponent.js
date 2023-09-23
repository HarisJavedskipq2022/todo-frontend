import { useState, useCallback } from "react";

function TodoEditForm({ initialValues, onSubmit, onCancel }) {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="my-4 p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-200 via-white to-purple-200">
			<input
				name="title"
				value={values.title}
				onChange={handleChange}
				placeholder="Title"
				className="border p-2 rounded mb-4 w-full focus:ring-2 focus:ring-purple-400"
			/>
			<textarea
				name="description"
				value={values.description}
				onChange={handleChange}
				placeholder="Description"
				className="border p-2 rounded mb-4 w-full focus:ring-2 focus:ring-purple-400"
				rows="3"
			/>
			<select
				name="status"
				value={values.status}
				onChange={handleChange}
				className="border p-2 rounded mb-4 w-full focus:ring-2 focus:ring-purple-400"
			>
				<option value="pending">Pending</option>
				<option value="completed">Completed</option>
			</select>
			<div className="flex space-x-4">
				<button
					onClick={() => onSubmit(values)}
					className="flex-grow bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-150"
				>
					Save
				</button>
				<button
					onClick={onCancel}
					className="flex-grow bg-gray-400 text-white p-2 rounded hover:bg-gray-500 transition duration-150"
				>
					Cancel
				</button>
			</div>
		</div>
	);
}

function TodoDisplay({ todo, onEdit, onDelete }) {
	return (
		<div className="my-4 p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-white to-blue-200">
			<h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
			<p className="text-gray-700 mb-4">{todo.description}</p>
			<p className="text-sm mb-4">
				<strong>Status:</strong> {todo.status}
			</p>
			<div className="flex space-x-4">
				<button
					onClick={onEdit}
					className="flex-grow bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-150"
				>
					Update
				</button>
				<button
					onClick={() => onDelete(todo.id)}
					className="flex-grow bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-150"
				>
					Delete
				</button>
			</div>
		</div>
	);
}

function TodoComponent({ todo, onUpdate, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	const handleUpdateSubmit = useCallback(
		(updatedValues) => {
			onUpdate(
				todo.id,
				updatedValues.title,
				updatedValues.description,
				updatedValues.status
			);
			setIsEditing(false);
		},
		[onUpdate, todo.id]
	);

	if (isEditing) {
		return (
			<TodoEditForm
				initialValues={todo}
				onSubmit={handleUpdateSubmit}
				onCancel={() => setIsEditing(false)}
			/>
		);
	}

	return (
		<TodoDisplay
			todo={todo}
			onEdit={() => setIsEditing(true)}
			onDelete={onDelete}
		/>
	);
}

export default TodoComponent;
