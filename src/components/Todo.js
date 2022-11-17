import React, { useState } from "react";

const Todo = ({
	todo,
	todos,
	setTodos,
	setToggleBtn,
	setTodoInput,
	setIsEdit,
}) => {
	const [modal, setModal] = useState(false);

	const handleDeleteTodo = (todoID, e) => {
		e.stopPropagation();
		const delTodo = todos.filter((to) => to.id !== todoID);
		setTodos(delTodo);
	};

	const editTodo = (todoID, e) => {
		e.stopPropagation();
		const newEdit = todos.find((ele) => ele.id === todoID);
		setToggleBtn(true);
		setTodoInput(newEdit);
		setIsEdit(todoID);
	};

	const checkCompleteHandler = (todoID, e) => {
		e.stopPropagation();
		setTodos(
			todos.map((item) => {
				if (item.id === todoID) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="single-todo" onClick={() => setModal(!modal)}>
			<li className={`${todo.completed ? "completed" : ""} `}>{todo.title}</li>
			<div className="btn-icons">
				<button onClick={(e) => checkCompleteHandler(todo.id, e)}>
					<i className="fas fa-check"></i>
				</button>
				<button onClick={(e) => editTodo(todo.id, e)}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button onClick={(e) => handleDeleteTodo(todo.id, e)}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
			{modal && (
				<div className="overlay" onClick={() => setModal(false)}>
					<div className="modal-container" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header">
							<h1 className="modal-header-text">{todo.title}</h1>
							<button onClick={() => setModal(false)}>X</button>
						</div>
						<div className="modal-info">
							<p>{todo.desc}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Todo;
