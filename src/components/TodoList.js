import React from "react";

const TodoList = ({ todo, handleDeleteTodo }) => {
	return (
		<div key={todo.id} className="todo-container">
			<p>Title : {todo.title}</p>
			<p>Desc : {todo.desc}</p>
			<p>Completed : {todo.completed ? "✅" : "❌"}</p>
			<button>Edit</button>
			<button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
		</div>
	);
};

export default TodoList;
