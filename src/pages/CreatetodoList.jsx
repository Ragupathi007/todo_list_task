import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import TodoList from "../components/TodoList";
export default function CreateTodoList() {

    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch(addTodo({ title: todo, completed: false }));
            setTodo('');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center mt-2 gap-2">
                <div>
                    <label htmlFor="todo" className="block text-sm font-medium leading-6 text-gray-900">
                        Create Todo
                    </label>
                    <input
                        id="todo"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add your todo's"
                        className="block w-[500px] px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    type="submit"
                    className="block rounded-md mt-6 bg-indigo-600 px-3  h-[37px] text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add
                </button>
            </form>

            <div >
                <TodoList />
            </div>
        </>
    )
}
