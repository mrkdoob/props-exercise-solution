import './DrinkButtons.css';

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
	return (
		<>
			<h2>
				Would you like {drinkOne} or {drinkTwo}?
			</h2>
			<div className="Button-group">
				<button className="Button">{drinkOne}</button>
				<button className="Button">{drinkTwo}</button>
			</div>
		</>
	);
};
