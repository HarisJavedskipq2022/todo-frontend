import Button from "../reusable/Button";

function TodoDisplay({ todo, onEdit, onDelete }) {
	return (
		<div className="my-4 p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-white to-blue-200">
			<h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
			<p className="text-gray-700 mb-4">{todo.description}</p>
			<p className="text-sm mb-4">
				<strong>Status:</strong> {todo.status}
			</p>
			<div className="flex space-x-4">
				<Button variant="primary" onClick={onEdit}>
					Update
				</Button>
				<Button variant="danger" onClick={() => onDelete(todo.id)}>
					Delete
				</Button>
			</div>
		</div>
	);
}

export default TodoDisplay;
