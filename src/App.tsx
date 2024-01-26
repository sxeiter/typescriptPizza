import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import {Routes, Route} from 'react-router-dom'; 
import { Menu } from './Pages/Menu/Menu';
import { Cart } from './Pages/Cart/Cart';

function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearence='big' onClick={addCounter}>Кнопка</Button>
			<Input placeholder='email'/>
			<div>
				<a href='/'>Меню</a>
				<a href='/cart'>Корзина</a>
			</div>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
