import React from "react";
import { BeatLoader } from "react-spinners";
import Input from "../reusable/Input";
import TextArea from "../reusable/TextArea";
import Select from "../reusable/Select";

function TodoForm({
	title,
	setTitle,
	description,
	setDescription,
	status,
	setStatus,
	onSubmit,
	loading,
}) {
	const statusOptions = [
		{ label: "Pending", value: "pending" },
		{ label: "Completed", value: "completed" },
	];

	return (
		<div className="min-h-screen bg-gray-400 flex items-center justify-center">
			<div className="bg-gradient-to-br from-purple-200 to-blue-200 p-8 rounded-lg shadow-xl w-96 space-y-6">
				{loading ? (
					<div className="flex justify-center items-center h-60">
						<BeatLoader color={"#123abc"} />
					</div>
				) : (
					<form onSubmit={onSubmit} className="space-y-4">
						<Input
							id="title"
							label="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter title"
							required
						/>
						<TextArea
							id="description"
							label="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Enter description"
							rows="4"
							required
						/>
						<Select
							id="status"
							label="Status"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							options={statusOptions}
							required
						/>
						<button
							type="submit"
							className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-150 ease-in-out"
						>
							Add Todo
						</button>
					</form>
				)}
			</div>
		</div>
	);
}

export default TodoForm;
