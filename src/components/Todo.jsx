import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodo, addTodo } from '../slices/todoSlice'

const Todo = () => {
    const todoList = useSelector(selectTodo);
    const [todoValue, setTodoValue] = useState('')
    const [isChecked, setIsChecked] = useState(false)


    const changeValue = (e) => {
        e.preventDefault();
        setTodoValue(e.target.value)
    }
    const dispatch = useDispatch();


    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <form className="" onSubmit={e => { e.preventDefault(); }}>
                        <input type="text" value={todoValue} className="form-control" onChange={changeValue} />
                        <input type="checkbox" className="my-3" checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} />
                        <br />
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => dispatch(addTodo({ id: Math.random(), title: todoValue, completed: isChecked }))}
                        >Add</button>
                    </form>
                </div>


                {todoList.map(todo =>
                    <div className="col-md-12 mt-4">
                        <div className="d-flex flex-row">
                            <div>{todo.completed ? 'Completed' : 'Not completed'}</div>
                            <div className="mx-4">{todo.title}</div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Todo
