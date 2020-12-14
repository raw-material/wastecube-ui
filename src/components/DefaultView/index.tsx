import * as React from 'react';
import { IAd } from '../App';
import './index.scss';

interface DefaultStateProps {
  ads?: Array<IAd>;
  changeState: (action: number) => void;
}

const DefaultView: React.FC<DefaultStateProps> = ({
  ads = [],
  changeState
}) => (
  <div className="default-view">
    {ads.length > 0 && (
      <figure>
        <img alt={ads[0].title} src={`http://localhost:5000${ads[0].url}`} />
      </figure>
    )}
    <div className="button-wrapper">
      <button className="start-button" onClick={() => changeState(1)}>
        Tocca per iniziare
      </button>
    </div>
  </div>
);

export default DefaultView;
