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
			{ads?.map((ad, index) => (
				<figure key={ad.title + index}>
					<img
						//src={`http://localhost:5000${ad.url}`}
						alt={ad.description}
					/>
				</figure>
			))}

			{ads?.map((ad, index) => (
				<div className="type-description">
					<div className="image-cropper">
						<figure key={ad.title + index}>
							<img
								className="profile-pic"
								src={`http://localhost:5000${ad.url}`}
							/>
						</figure>
					</div>
				</div>
			))}

			<br />
			<br />

			<p>Grazie per aver salvato l'ambiente</p>
		</div>
	</div>
);

export default FinalView;
