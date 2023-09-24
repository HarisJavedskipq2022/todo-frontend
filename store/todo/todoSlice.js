import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	isLoading: false,
	error: null,
	editingTodoId: null,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		requestStarted: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		requestFailed: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		fetchTodosSuccess: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},

		addTodoSuccess: (state, action) => {
			state.data.push(action.payload);
			state.isLoading = false;
		},

		updateTodoSuccess: (state, action) => {
			const index = state.data.findIndex(
				(todo) => todo.id === action.payload.id
			);
			if (index !== -1) {
				state.data[index] = action.payload;
			}
			state.isLoading = false;
		},

		deleteTodoSuccess: (state, action) => {
			state.data = state.data.filter(
				(todo) => todo.id !== action.payload.id
			);
			state.isLoading = false;
		},
		setEditingTodoId: (state, action) => {
			state.editingTodoId = action.payload;
		},

		clearEditingTodoId: (state) => {
			state.editingTodoId = null;
		},
	},
});

export const {
	requestStarted,
	requestFailed,
	fetchTodosSuccess,
	addTodoSuccess,
	updateTodoSuccess,
	deleteTodoSuccess,
	setEditingTodoId,
	clearEditingTodoId,
} = todoSlice.actions;

export default todoSlice.reducer;
