import * as React from 'react';
import { IAd } from '../App';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

interface DefaultStateProps {
  ads?: Array<IAd>;
  changeState: (action: number) => void;
}

const sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  pauseOnHover: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const DefaultView: React.FC<DefaultStateProps> = ({
  ads = [],
  changeState
}) => (
  <div className="default-view">
    {ads?.length > 0 && (
      <Slider {...sliderSettings}>
        {ads?.map((ad, index) => (
          <figure key={ad.title + index}>
            <img
              alt={ad.title}
              src={`http://localhost:5000${ad.url}`}
              title={ad.description}
            />
          </figure>
        ))}
      </Slider>
    )}
    <div className="button-wrapper">
      <button className="start-button" onClick={() => changeState(1)}>
        Tocca per iniziare
      </button>
    </div>
  </div>
);

export default DefaultView;
