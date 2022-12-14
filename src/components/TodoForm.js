import React from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const TodoForm = ({
	todoInput,
	setTodoInput,
	todos,
	setTodos,
	initialValues,
	setFilter,
	toggleBtn,
	setToggleBtn,
	isEdit,
	setIsEdit,
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
		if (todoInput.title && todoInput.desc && toggleBtn) {
			setTodos((todos) =>
				todos.map((ele) => {
					if (ele.id === isEdit) {
						return { ...ele, title: todoInput.title, desc: todoInput.desc };
					}
					return ele;
				})
			);
			setToggleBtn(false);
			setTodoInput(initialValues);
			setIsEdit(null);
			toast.success("Todo Updated Successfully");
		} else {
			if (todoInput.title && todoInput.desc) {
				setTodos([
					...todos,
					{
						title: todoInput.title,
						desc: todoInput.desc,
						completed: false,
						id: uuidv4(),
					},
				]);
				toast.success("Todo Created");
				setTodoInput(initialValues);
			} else {
				toast.warning("Both Title and Description Fields are mandatory");
			}
		}
	};

	const handleFilter = (e) => {
		setFilter(e.target.value);
	};

	return (
		<form>
			<input
				type="text"
				name="title"
				placeholder="Enter Title"
				className="todo-title"
				value={todoInput.title}
				onChange={handleInputChange}
			/>
			<textarea
				rows="5"
				type="text"
				name="desc"
				className="todo-desc"
				placeholder="Enter Description"
				value={todoInput.desc}
				onChange={handleInputChange}
			/>
			<div className="btn-div">
				{toggleBtn ? (
					<button
						onClick={addTodoHandler}
						className="btn-primary"
						type="submit"
					>
						Update Todo
					</button>
				) : (
					<button
						onClick={addTodoHandler}
						className="btn-primary"
						type="submit"
					>
						Add Todo
					</button>
				)}

				<select name="todos" onChange={handleFilter}>
					<option value="all">All</option>
					<option value="pending">Pending</option>
					<option value="completed">Completed</option>
				</select>
			</div>
		</form>
	);
};

export default TodoForm;
