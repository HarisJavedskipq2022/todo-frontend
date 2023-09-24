import { useState } from "react";
import Button from "../reusable/Button";
import Input from "../reusable/Input";
import TextArea from "../reusable/TextArea";
import Select from "../reusable/Select";

function TodoEditForm({ initialValues, onSubmit, onCancel }) {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="my-4 p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-200 via-white to-purple-200">
			<Input
				name="title"
				value={values.title}
				onChange={handleChange}
				placeholder="Title"
			/>
			<TextArea
				name="description"
				value={values.description}
				onChange={handleChange}
				placeholder="Description"
				rows="3"
			/>
			<Select
				name="status"
				value={values.status}
				onChange={handleChange}
				options={[
					{ value: "pending", label: "Pending" },
					{ value: "completed", label: "Completed" },
				]}
			/>
			<div className="flex space-x-4">
				<Button variant="success" onClick={() => onSubmit(values)}>
					Save
				</Button>
				<Button variant="neutral" onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</div>
	);
}

export default TodoEditForm;
