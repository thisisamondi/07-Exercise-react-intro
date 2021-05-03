import { useState } from 'react';
import './Pacman.css'


const Pacman = () => {
	const [isVisible, setIsVisible] = useState(false);

	// ge värde av null så att den inte syns från början
	let blob = null;


	if (isVisible) {
		blob = <div className="blob">

		</div>
	}

	const showPacman = () => {

			setIsVisible(!isVisible);
			
		}


	return (
		<div>
			<p>
				<button onClick={showPacman}>
					{isVisible ? 'Hide' : 'Show'} Pacman
				</button>
			</p>

			<p>This is a component that shows or hides pacman.</p>

			{blob}

		</div>

	)
	
}

export default Pacman