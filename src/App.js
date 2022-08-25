import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';

export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const tea = {
		name: 'Tea',
		imgUrl:
			'https://media.cleanshot.cloud/media/40052/qNr6dVsVaBwckStQdS30rUEthTJSleCd43qvISnB.jpeg?Expires=1661452430&Signature=r2JaK0a4cMxsDU~Ejt1IukM9tIUTd2~5NlVSkNCLEj8S8~3rG5gZSnFR8gj5h7A~IBnd2C2jbLFJmsMguujG4HjCiEanGQDeJKhTTjH1JZjpuE~cxae8cKRs6JU01hnnfv7F1Dybx1eR50Jh6JwBweFqffxwK4qKWbeouxCnMDptTuVH36mACkzoSk5EA3WNLyjaREG3~z8CZqGM0oBLCiMA5mApVnq3SZBDsbNj~L8DyGUpVx7t~PHdjUynU~rYGW8saO9YEhHkv~mIZ4EaRN8skoFVmWHbbB~blXxCFkCCezy3Fff2mQb-Mmw~mxr9nVPTFE3DDc1Bwjajz7QfcQ__&Key-Pair-Id=K269JMAT9ZF4GZ',
		alt: `Picture of a cup of tea`,
	};
	const coffee = {
		name: 'Coffee',
		imgUrl:
			'https://media.cleanshot.cloud/media/40052/qAwhaSwhLzNrK1EB3kamnP5eqcOVawKhdMRkrUdR.jpeg?Expires=1661448157&Signature=TWv1sBVPa0SmGmTVkFFOCbS~6pPVbiX1xeorS52KQPw1011QAtBovs8m0hRyyu8JWf4FHj2MnLPYJmnGXxSkOFf6g6Lys-TyKxdbWUdobyUrYrnltn-SRrmHLgx-uRvSQzoewQx5Bb2LRJ5IU0eoofG7sQ0x8WLzwes5tltGMknUu1jc857kedj32D57B2HLEKLB5MTTdjX8l~yK~oZbJuSLiiRLFwZpXhqDz31gJQFo210EP7vCfxEVKeH0WUUm7UcemzenhpNbOE4l-IzQxjIrDt1sG8ymcDFl7EXVDiWBB6tJILyqhRkKsAzTlk8MEloOSCUmUn8gAzCM3Ka~hA__&Key-Pair-Id=K269JMAT9ZF4GZ',
		alt: `Picture of a cup coffee`,
	};

	const userDrink = tea;

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			<DrinkChoice drink={userDrink} />
		</div>
	);
};
