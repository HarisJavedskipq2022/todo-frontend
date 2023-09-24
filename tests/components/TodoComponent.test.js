import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoComponent from "@/components/TodoItem";

describe("<TodoComponent />", () => {
	const sampleTodo = {
		id: "1",
		title: "Sample Todo",
		description: "Sample Description",
		status: "pending",
	};

	let mockUpdate;
	let mockDelete;

	beforeEach(() => {
		mockUpdate = jest.fn();
		mockDelete = jest.fn();
	});

	it("renders todo details by default", () => {
		render(
			<TodoComponent
				todo={sampleTodo}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);
		expect(screen.getByText("Sample Todo")).toBeInTheDocument();
	});

	it("renders <TodoEditForm /> after clicking the update button", () => {
		render(
			<TodoComponent
				todo={sampleTodo}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);
		fireEvent.click(screen.getByText("Update"));
		expect(screen.getByText("Save")).toBeInTheDocument();
	});

	it("renders todo details after canceling the update", () => {
		render(
			<TodoComponent
				todo={sampleTodo}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);
		fireEvent.click(screen.getByText("Update"));
		fireEvent.click(screen.getByText("Cancel"));
		expect(screen.getByText("Sample Todo")).toBeInTheDocument();
	});

	it("calls onUpdate when changes are saved", () => {
		render(
			<TodoComponent
				todo={sampleTodo}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);
		fireEvent.click(screen.getByText("Update"));
		fireEvent.change(screen.getByPlaceholderText("Title"), {
			target: { value: "Updated Title" },
		});
		fireEvent.click(screen.getByText("Save"));
		expect(mockUpdate).toHaveBeenCalledWith(
			"1",
			"Updated Title",
			"Sample Description",
			"pending"
		);
	});

	it("calls onDelete when delete is clicked", () => {
		render(
			<TodoComponent
				todo={sampleTodo}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);
		fireEvent.click(screen.getByText("Delete"));
		expect(mockDelete).toHaveBeenCalled();
	});
});
