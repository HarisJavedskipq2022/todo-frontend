import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoForm from "@/components/TodoForm";

describe("<TodoForm />", () => {
	const mockSetTitle = jest.fn();
	const mockSetDescription = jest.fn();
	const mockSetStatus = jest.fn();
	const mockOnSubmit = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("displays the loader when loading prop is true", () => {
		render(
			<TodoForm
				title=""
				description=""
				status="pending"
				onChange={() => {}}
				onSubmit={() => {}}
				loading={true}
			/>
		);

		const loaders = screen.getAllByText((_, element) => {
			return /rgb\(18, 58, 188\)/.test(element.style.backgroundColor);
		});

		expect(loaders).toHaveLength(3);
		loaders.forEach((loader) => {
			expect(loader).toBeInTheDocument();
		});
	});

	it("updates title, description, and status on change", () => {
		render(
			<TodoForm
				title=""
				setTitle={mockSetTitle}
				description=""
				setDescription={mockSetDescription}
				status="pending"
				setStatus={mockSetStatus}
				onSubmit={mockOnSubmit}
				loading={false}
			/>
		);

		fireEvent.change(screen.getByPlaceholderText("Enter title"), {
			target: { value: "Test Title" },
		});
		expect(mockSetTitle).toHaveBeenCalledWith("Test Title");

		fireEvent.change(screen.getByPlaceholderText("Enter description"), {
			target: { value: "Test Description" },
		});
		expect(mockSetDescription).toHaveBeenCalledWith("Test Description");

		fireEvent.change(screen.getByLabelText("Status"), {
			target: { value: "completed" },
		});
		expect(mockSetStatus).toHaveBeenCalledWith("completed");
	});

	it("calls onSubmit when the form is submitted", async () => {
		render(
			<TodoForm
				title=""
				setTitle={mockSetTitle}
				description=""
				setDescription={mockSetDescription}
				status="pending"
				setStatus={mockSetStatus}
				onSubmit={mockOnSubmit}
				loading={false}
			/>
		);

		fireEvent.submit(screen.getByText("Add Todo").closest("form"));

		await waitFor(() => {
			expect(mockOnSubmit).toHaveBeenCalled();
		});
	});
});
