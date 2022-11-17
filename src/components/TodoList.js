import React from "react";
import Todo from "./Todo";

const TodoList = ({
	todos,
	setTodos,
	filteredTodos,
	setToggleBtn,
	setTodoInput,
	setIsEdit,
}) => {
	return (
		<div className="todo-container">
			<ul>
				{filteredTodos.map((todo) => (
					<Todo
						todo={todo}
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						setTodoInput={setTodoInput}
						setToggleBtn={setToggleBtn}
						setIsEdit={setIsEdit}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
