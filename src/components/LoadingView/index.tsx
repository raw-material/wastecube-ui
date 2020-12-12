import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

interface LoadingStateProps {
  changeState: () => any;
}

const LoadingView: React.FC<LoadingStateProps> = ({ changeState }) => (
  <div className="loading-view">
    <div className="types-wrapper">
      <div className="type-column first">
        <h2>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>PET</span>
        </h2>
        <div className="type-description">
          <figure>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2Fcrushed-plastic-bottle-daniel-sanchez-blasco.jpg&f=1&nofb=1"
              alt=""
            />
          </figure>
          <ul>
            <li>Bottiglie d'acqua</li>
            <li>Bottiglie per bibite</li>
            <li>Plastica alimentare bianca o colorata</li>
          </ul>
        </div>
      </div>
      <div className="type-column second">
        <h2>
          <span>HDPE</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </h2>
        <div className="type-description">
          <figure>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhq.recyclist.co%2Fwp-content%2Fuploads%2F2015%2F02%2Fno2plastic1-300x300.jpg&f=1&nofb=1"
              alt=""
            />
          </figure>
          <ul>
            <li>Bottiglie d'acqua</li>
            <li>Bottiglie per bibite</li>
            <li>Plastica alimentare bianca o colorata</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="count-wrapper">
      <p>Hai conferito 6 bottiglie</p>
    </div>

    <div className="button-wrapper">
      <button className="finish-button" onClick={changeState}>
        finito
      </button>
    </div>
  </div>
);

export default LoadingView;
