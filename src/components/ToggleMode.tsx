import { useState } from 'react';
import './ToggleMode.css'


const ToggleMode = () => {
	const [mode, setMode] = useState('dark');

	const setLightMode = () => {
		setMode('light');
	}

	const setDarkMode = () => {
		setMode('dark');
	}


	return (
		<div className={mode}>
			<p>
				<button onClick={setLightMode}> Light Mode </button>
				<button onClick={setDarkMode}> Dark Mode </button>
			</p>
			<p>This is a component that toggles between light mode and dark mode.</p>
		</div>

	)
	
}

export default ToggleMode