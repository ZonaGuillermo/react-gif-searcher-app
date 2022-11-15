import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory />', () => {
	test('debe de cambiar el valor de la caja de texto', () => {

		render(<AddCategory onNewCategory={() => { }} />);
		const inputBox = screen.getByRole('textbox');
		
		fireEvent.input(inputBox, { target: { value: 'Work Right' } });
		// screen.debug();
		
		expect(inputBox.value).toBe('Work Right');
	});
	
	test('debe de llamar onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Work Right';
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		const inputBox = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		
		fireEvent.input(inputBox, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(inputBox.value).toBe('');
		// screen.debug();

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});
	
	test('no debe de llamar onNewCategory si el input está vacío', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form');
		// screen.debug();
		
		fireEvent.submit(form);
		
		expect(onNewCategory).toHaveBeenCalledTimes(0);
		expect(onNewCategory).not.toHaveBeenCalled();
	});

});
