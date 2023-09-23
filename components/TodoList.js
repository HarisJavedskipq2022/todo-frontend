import TodoComponent from "./TodoComponent";

function TodoList({ todos, onUpdate, onDelete }) {
	return (
		<div className="space-y-4">
			{todos.map((todo) => (
				<TodoComponent
					key={todo.id}
					todo={todo}
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
}

export default TodoList;
