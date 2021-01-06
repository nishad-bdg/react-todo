import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
});

export const { addTodo } = todoSlice.actions;

export const selectTodo = state => state.todo.todoList;

export default todoSlice.reducer;