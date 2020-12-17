import * as React from 'react';
import { IAd } from '../App';
import { useIdleTimer } from 'react-idle-timer';

import './index.scss';

interface FinalStateProps {
	ads?: Array<IAd>;
	changeState: (action: number) => void;
}

const useIdleTimerHandler =
	process.env.NODE_ENV !== 'development'
		? useIdleTimer
		: () => ({ reset: () => {} });

const FinalView: React.FC<FinalStateProps> = ({ changeState, ads }) => {
	const { reset } = useIdleTimerHandler({
		timeout: 1000 * 60,
		onIdle: () => changeState(-2),
		debounce: 500
	});

	const [count, setCount] = React.useState<number>(0);

	React.useEffect(() => {
		const socket = new WebSocket('ws://localhost:5001');

		socket.addEventListener('open', (e: any) => {
			e?.data && !isNaN(e.data) && setCount(e.data);
			reset();
		});

		socket.addEventListener('message', (e: any) => {
			e?.data && !isNaN(e.data) && setCount(e.data);
		});

		return () => socket.close();
	}, []);

	return (
		<div className="final-view">
			<div className="good">
				<p>Bravo!</p>
				<p>Hai caricato 2 bottiglie</p>
			</div>
			<div className="container-wrapper">
				<p className="number-of-contributions">
					Con questo numero di conferimenti puoi ottenere:
				</p>
				{ads?.filter((ad) => ad.isPromo == true).map((ad) => (
						<figure key={ad.title}>
							<img alt={ad.description} />
						</figure>
					))}
				<p className="prize-description">Scegli il tuo premio: </p>
				{ads?.filter((ad) => ad.isPromo == true).map((ad) => (
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
					))}

				<br />
				<br />

				<p>Grazie per aver salvato l'ambiente</p>
			</div>
		</div>
	);
};

export default FinalView;
