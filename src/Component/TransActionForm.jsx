/** @format */
import { useState } from 'react';

const TransActionForm = ({ addTransaction, setIsShow }) => {
	// type : , amount , desc
	const [formValues, setFormValue] = useState({
		type: 'expense',
		amount: 0,
		desc: '',
	});

	const changeHandler = (e) => {
		setFormValue({ ...formValues, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (formValues.amount === 0) {
			alert("Please enter a value")
		}
		else {
			addTransaction(formValues);
			setIsShow(false);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="description">description :</label>
			<input
				style={{ marginBottom: "10px" }}
				type='text'
				id="description"
				name='desc'
				onChange={changeHandler}
				value={formValues.desc}
			/>
			<label htmlFor="amount">Amount :</label>
			<input
				type='number'
				id='amount'
				name='amount'
				onChange={changeHandler}
				value={formValues.amount}
			/>
			<div className='radioBox'>
				<input
					type='radio'
					value='expense'
					name='type'
					checked={formValues.type === 'expense'}
					onChange={changeHandler}
					id='expense'
				/>
				<label htmlFor='expense'>Expense</label>
				<input
					style={{ margin: '10px 0 10px 20px' }}
					type='radio'
					value='income'
					name='type'
					checked={formValues.type === 'income'}
					onChange={changeHandler}
					id='income'
				/>
				<label htmlFor='income'>Income</label>
			</div>
			<button className='btn primary' type='submit'>
				Add transaction
			</button>
		</form>
	);
};

export default TransActionForm;
