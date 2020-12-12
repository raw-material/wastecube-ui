import * as React from 'react';
import bottlesAndCans from './pictures/bottles-and-cans.jpg';
import bottleTrees from './pictures/bottles-trees.jpg';
import './index.scss';

interface Ad {
  url: string;
  title: string;
}

interface LoadingStateProps {
  changeState: () => any;
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

const LoadingView: React.FC<LoadingStateProps> = ({
  changeState
}) => (
  <div className="loading-view">
    <div className="pet-wrapper">
      <button className="pet-button">PET</button>
    </div>
    <div className="hdpe-wrapper">
      <button className="hdpe-button">HDPE</button>
    </div>
    <div className = "vertical"></div>
    <div className="button-wrapper">
      <button className="finish-button" onClick={changeState}>
        finito
      </button>
    </div>
  </div>


);

export default LoadingView;