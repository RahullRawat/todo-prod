import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({
	todoInput,
	setTodoInput,
	todos,
	setTodos,
	initialValues,
}) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTodoInput({
			...todoInput,
			[name]: value,
		});
	};

	const addTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				title: todoInput.title,
				desc: todoInput.desc,
				completed: false,
				id: uuidv4(),
			},
		]);
		localStorage.setItem("todos", JSON.stringify(todos));
		setTodoInput(initialValues);
	};
	return (
		<div>
			<form>
				<input
					type="text"
					name="title"
					placeholder="Enter Title"
					value={todoInput.title}
					onChange={handleInputChange}
				/>
				<textarea
					rows="5"
					type="text"
					name="desc"
					placeholder="Enter Description"
					value={todoInput.desc}
					onChange={handleInputChange}
				/>
				<div>
					<button onClick={addTodoHandler} type="submit">
						Add Todo
					</button>
					<select name="todos">
						<option value="all">All</option>
						<option value="pending">Pending</option>
						<option value="completed">Completed</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
