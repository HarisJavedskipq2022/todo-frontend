import { useState } from "react";
import TodoComponent from "../TodoItem";
function TodoList({ todos, onUpdate, onDelete }) {
	const [filter, setFilter] = useState("all");

	const filteredTodos = todos.filter((todo) => {
		if (filter === "all") return true;
		return todo.status === filter;
	});

	return (
		<div className="space-y-4">
			<div className="mb-4 flex space-x-4">
				<button
					onClick={() => setFilter("all")}
					className={`px-4 py-2 rounded-md ${
						filter === "all"
							? "bg-purple-500 text-white"
							: "bg-white text-purple-500 border border-purple-500"
					}`}
				>
					All
				</button>
				<button
					onClick={() => setFilter("pending")}
					className={`px-4 py-2 rounded-md ${
						filter === "pending"
							? "bg-purple-500 text-white"
							: "bg-white text-purple-500 border border-purple-500"
					}`}
				>
					Pending
				</button>
				<button
					onClick={() => setFilter("completed")}
					className={`px-4 py-2 rounded-md ${
						filter === "completed"
							? "bg-purple-500 text-white"
							: "bg-white text-purple-500 border border-purple-500"
					}`}
				>
					Completed
				</button>
			</div>

			{filteredTodos.length === 0 ? (
				<p className="text-gray-500 font-medium italic">
					No tasks found for the selected filter.
				</p>
			) : (
				filteredTodos.map((todo) => (
					<TodoComponent
						key={todo.id}
						todo={todo}
						onUpdate={onUpdate}
						onDelete={onDelete}
					/>
				))
			)}
		</div>
	);
}

export default TodoList;
