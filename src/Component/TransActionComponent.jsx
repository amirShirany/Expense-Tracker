/** @format */
import { useState, useEffect } from 'react';

const TransActionComponent = (props) => {
	// tnx => all tnx should be save
	// search item => ...
	const [searchItem, setSearchItem] = useState('');
	const [filteredTnx, setFilteredTnx] = useState(props.transactions);

	const filterTransactions = (search) => {
		if (!search || search === '') {
			setFilteredTnx(props.transactions);
			return;
		}
		const filtered = props.transactions.filter((t) =>
			t.desc.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredTnx(filtered);
	};

	const changeHandler = (e) => {
		setSearchItem(e.target.value);
		filterTransactions(e.target.value);
	};

	useEffect(() => {
		filterTransactions(searchItem);
	}, [props.transactions]);

	if (!props.transactions.length)
		return <h3 style={{ margin: '20px' }}>Add some transactions!</h3>;

	return (
		<section>
			<input
				type='text'
				className='search'
				value={searchItem}
				onChange={changeHandler}
				placeholder='Search for tnx...'
			/>
			{filteredTnx.length
				? filteredTnx.map((t) => (
						<div
							className='transaction'
							key={t.id}
							style={{ borderRight: t.type === 'expense' && '4px solid red' }}>
							<span>{t.desc}</span>
							<span> $ {t.amount}</span>
						</div>
				  ))
				: 'no item is matchs!'}
		</section>
	);
};

export default TransActionComponent;
