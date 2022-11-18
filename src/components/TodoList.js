import React from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";
import { Droppable } from "react-beautiful-dnd";

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
			<Droppable droppableId="todoslist">
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<ul>
							{filteredTodos.length > 0 ? (
								filteredTodos.map((todo, index) => (
									<Todo
										todo={todo}
										key={todo.id}
										todos={todos}
										setTodos={setTodos}
										setTodoInput={setTodoInput}
										setToggleBtn={setToggleBtn}
										setIsEdit={setIsEdit}
										index={index}
									/>
								))
							) : (
								<h2 className="no-todos">No Todos</h2>
							)}
							{provided.placeholder}
							{todos.length > 0 ? (
								<button className="btn-primary" onClick={clearAllTodoHandler}>
									Clear All Todo's
								</button>
							) : null}
						</ul>
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
