import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		const inputValueTrim = inputValue.trim();
		if (inputValueTrim.length <= 1) return;
		
		// setCategories(categories => [inputValue, ...categories]);
		onNewCategory(inputValueTrim);
		setInputValue('');
	}
	
	
	return (
		<form onSubmit={ onSubmit }>
			<input
				type="text"
				placeholder="Buscar Gifs"
				value={ inputValue }
				onChange={ onInputChange }
			/>
		</form>
	)
}