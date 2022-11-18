import React from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";

const TodoList = ({
	todos,
	setTodos,
	filteredTodos,
	setToggleBtn,
	setTodoInput,
	setIsEdit,
}) => {
	const clearAllTodoHandler = () => {
		setTodos([]);
		toast.success(`All Todo's Cleared`);
	};
	return (
		<div className="todo-container">
			<ul>
				{filteredTodos.length > 0 ? (
					filteredTodos.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							todos={todos}
							setTodos={setTodos}
							setTodoInput={setTodoInput}
							setToggleBtn={setToggleBtn}
							setIsEdit={setIsEdit}
						/>
					))
				) : (
					<h2 className="no-todos">No Todos</h2>
				)}
				{todos.length > 0 ? (
					<button className="btn-primary" onClick={clearAllTodoHandler}>
						Clear All Todo's
					</button>
				) : null}
			</ul>
		</div>
	);
};

export default TodoList;
