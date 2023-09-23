import React from "react";
import { BeatLoader } from "react-spinners";

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
	return (
		<div className="min-h-screen bg-gray-200 flex items-center justify-center">
			<div className="bg-gradient-to-br from-purple-200 to-blue-200 p-8 rounded-lg shadow-xl w-96 space-y-6">
				{loading ? (
					<div className="flex justify-center items-center h-60">
						<BeatLoader color={"#123abc"} />
					</div>
				) : (
					<form onSubmit={onSubmit} className="space-y-4">
						<div className="flex flex-col space-y-2">
							<label
								htmlFor="title"
								className="text-sm font-semibold"
							>
								Title
							</label>
							<input
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Enter title..."
								required
								className="border p-2 rounded w-full"
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label
								htmlFor="description"
								className="text-sm font-semibold"
							>
								Description
							</label>
							<textarea
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Enter description..."
								required
								className="border p-2 rounded w-full"
								rows="4"
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label
								htmlFor="status"
								className="text-sm font-semibold"
							>
								Status
							</label>
							<select
								id="status"
								value={status}
								onChange={(e) => setStatus(e.target.value)}
								required
								className="border p-2 rounded w-full"
							>
								<option value="pending">Pending</option>
								<option value="completed">Completed</option>
							</select>
						</div>

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
