import React, { useEffect, useState } from 'react';
import { ToDoForms, ToDoItem } from './Components';
import { ToDoProvider } from './Contexts/toDoContext';


function App() {
    const [todos, setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updatedToDo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
    };

    const deleteToDo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
        );
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <ToDoProvider value={{ todos, addToDo, updatedToDo, deleteToDo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForms />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <ToDoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ToDoProvider>
    );
}

export default App;
