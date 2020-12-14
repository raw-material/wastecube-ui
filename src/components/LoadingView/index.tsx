import * as React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IType } from '../App';
import './index.scss';

interface LoadingStateProps {
  changeState: (action: number) => void;
  types?: {
    left: IType;
    right: IType;
  };
}

const useIdleTimerHandler =
  process.env.NODE_ENV !== 'development'
    ? useIdleTimer
    : () => ({ reset: () => {} });

const LoadingView: React.FC<LoadingStateProps> = ({ changeState, types }) => {
  const { reset } = useIdleTimerHandler({
    timeout: 1000 * 60,
    onIdle: () => changeState(-1),
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
    <div className="loading-view">
      {types && (
        <div className="types-wrapper">
          <div className="type-column first">
            <h2>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>{types.left.title}</span>
            </h2>
            <div className="type-description">
              <figure>
                <img src={`http://localhost:5000${types.left.image}`} alt="" />
              </figure>
              <div
                dangerouslySetInnerHTML={{ __html: types.left.description }}
              />
            </div>
          </div>
          <div className="type-column second">
            <h2>
              <span>{types.right.title}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </h2>
            <div className="type-description">
              <figure>
                <img src={`http://localhost:5000${types.right.image}`} alt="" />
              </figure>
              <div
                dangerouslySetInnerHTML={{ __html: types.right.description }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="count-wrapper">
        <p>Hai conferito {count} bottiglie</p>
      </div>

      <div className="button-wrapper">
        <button className="finish-button" onClick={() => changeState(1)}>
          finito
        </button>
      </div>
    </div>
  );
};

export default LoadingView;
