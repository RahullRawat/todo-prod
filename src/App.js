import { useEffect, useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DragDropContext } from "react-beautiful-dnd";

const getTodoFromLocal = () => {
	let list = localStorage.getItem("todos");
	try {
		if (list) {
			const res = JSON.parse(list);
			return Array.isArray(res) ? res : [];
		} else {
			return [];
		}
	} catch (error) {
		return [];
	}
};

function App() {
	const initialValues = {
		title: "",
		desc: "",
	};
	const [todoInput, setTodoInput] = useState(initialValues);
	const [todos, setTodos] = useState(getTodoFromLocal());
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [toggleBtn, setToggleBtn] = useState(false);
	const [isEdit, setIsEdit] = useState(null);

	useEffect(() => {
		const handleFilterTodo = () => {
			if (filter === "completed") {
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
			} else if (filter === "pending") {
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
			} else {
				setFilteredTodos(todos);
			}
		};
		handleFilterTodo();
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [filter, todos]);

	const onDragEnd = (result) => {
		const { source, destination } = result;
		if (!destination) return;
		const items = Array.from(todos);
		const [reorderedItem] = items.splice(source.index, 1);
		items.splice(destination.index, 0, reorderedItem);
		setTodos(items);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="App">
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					theme="colored"
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<header>
					<h1 className="todo-heading">Todos</h1>
				</header>
				<TodoForm
					todoInput={todoInput}
					setTodoInput={setTodoInput}
					todos={todos}
					setTodos={setTodos}
					initialValues={initialValues}
					setFilter={setFilter}
					toggleBtn={toggleBtn}
					setToggleBtn={setToggleBtn}
					isEdit={isEdit}
					setIsEdit={setIsEdit}
				/>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					setTodoInput={setTodoInput}
					filteredTodos={filteredTodos}
					setToggleBtn={setToggleBtn}
					setIsEdit={setIsEdit}
				/>
			</div>
		</DragDropContext>
	);
}

export default App;
