import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../features/todoSlice";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [newTodo, setNewTodo] = useState("");

    const handleDelete = (index) => {
        dispatch(deleteTodo(index));
    };

    const handleEdit = (index, todo) => {
        setIsEditing(index);
        setNewTodo(todo.title);
    };

    const handleSave = (index) => {
        dispatch(editTodo({ index, newTodo: { title: newTodo } }));
        setIsEditing(null);
        setNewTodo("");
    };

    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                {isEditing === index ? (
                                    <input
                                        type="text"
                                        value={newTodo}
                                        onChange={(e) => setNewTodo(e.target.value)}
                                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                ) : (
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {todo.title}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(index)}
                            type="button"
                            className="block rounded-md mt-2 bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Delete
                        </button>
                        {isEditing === index ? (
                            <button
                                onClick={() => handleSave(index)}
                                type="button"
                                className="block rounded-md mt-2 bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEdit(index, todo)}
                                type="button"
                                className="block rounded-md mt-2 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Edit
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
