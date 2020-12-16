import * as React from 'react';
import { IAd } from '../App';

import './index.scss';

interface FinalStateProps {
	ads?: Array<IAd>;
	changeState: (action: number) => void;
}

const FinalView: React.FC<FinalStateProps> = ({ ads = [], changeState }) => (
	<div className="final-view">
		<div className="good">
			<p>Bravo!</p>
			<p>Hai caricato 2 bottiglie</p>
		</div>
		<div className="container-wrapper">
			<p className="number-of-contributions">Con questo numero di conferimenti puoi ottenere:</p>
			{ads?.filter(ad => ad.isPromo == true).map(ad =>

				<figure key={ad.title}>
					<img
						alt={ad.description}
					/>
				</figure>
			)}
			<p className="prize-description">Scegli il tuo premio: </p>
			{ads?.filter(ad => ad.isPromo == true).map(ad =>
				<div className="type-description">
					<div className="image-cropper">
						<figure key={ad.title}>
							<img
								className="profile-pic"
								src={`http://localhost:5000${ad.url}`}
							/>
						</figure>
					</div>
				</div>
			)}

			<br />
			<br />

			<p>Grazie per aver salvato l'ambiente</p>
		</div>
	</div>
);

export default FinalView;
