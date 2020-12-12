import * as React from 'react';
import bottlesAndCans from './pictures/bottles-and-cans.jpg';
import bottleTrees from './pictures/bottles-trees.jpg';
import './index.scss';

interface Ad {
  url: string;
  title: string;
}

interface DefaultStateProps {
  ads?: Array<Ad>;
  changeState: (action: number) => void;
}

const defaultAds: Array<Ad> = [
  {
    title: 'bottles and cans',
    url: bottlesAndCans
  },
  {
    title: 'bottles and trees',
    url: bottleTrees
  }
];

const DefaultView: React.FC<DefaultStateProps> = ({
  ads = defaultAds,
  changeState
}) => (
  <div className="default-view">
    <figure>
      <img alt={ads[0].title} src={ads[0].url} />
    </figure>
    <div className="button-wrapper">
      <button className="start-button" onClick={() => changeState(1)}>
        Tocca per iniziare
      </button>
    </div>
  </div>
);

export default DefaultView;
