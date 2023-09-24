// TodoComponent.js
import { useState, useCallback } from "react";
import TodoEditForm from "./TodoEditForm";
import TodoDisplay from "./TodoDisplay";

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
