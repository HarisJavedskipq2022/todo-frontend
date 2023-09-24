import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "@/components/Todolist";

describe("<TodoList />", () => {
	const sampleTodos = [
		{ id: "1", title: "Todo 1", status: "pending" },
		{ id: "2", title: "Todo 2", status: "completed" },
	];

	const mockUpdate = jest.fn();
	const mockDelete = jest.fn();

	it('renders all todos when "All" filter is selected', () => {
		render(
			<TodoList
				todos={sampleTodos}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);

		expect(screen.getByText("Todo 1")).toBeInTheDocument();
		expect(screen.getByText("Todo 2")).toBeInTheDocument();
	});

	it('renders only pending todos when "Pending" filter is selected', () => {
		render(
			<TodoList
				todos={sampleTodos}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);

		fireEvent.click(screen.getByText("Pending"));

		expect(screen.getByText("Todo 1")).toBeInTheDocument();
		expect(screen.queryByText("Todo 2")).not.toBeInTheDocument();
	});

	it('renders only completed todos when "Completed" filter is selected', () => {
		render(
			<TodoList
				todos={sampleTodos}
				onUpdate={mockUpdate}
				onDelete={mockDelete}
			/>
		);

		fireEvent.click(screen.getByText("Completed"));

		expect(screen.queryByText("Todo 1")).not.toBeInTheDocument();
		expect(screen.getByText("Todo 2")).toBeInTheDocument();
	});

	it("displays a message when no todos match the selected filter", () => {
		render(
			<TodoList todos={[]} onUpdate={mockUpdate} onDelete={mockDelete} />
		);

		fireEvent.click(screen.getByText("Pending"));

		expect(
			screen.getByText("No tasks found for the selected filter.")
		).toBeInTheDocument();
	});
});
