import * as React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
//import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';
//import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
//import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.css';
import './App.css';

type AppState = 'DEFAULT' | 'LOADING' | 'FINAL';

const App = () => {
  const [appState, setAppState] = React.useState<AppState>('DEFAULT');

  const data = {
    ads: [
      { url: 'https://picsum.photos/id/1/300/200', title: 'Promo 1' },
      { url: 'https://picsum.photos/id/2/300/200', title: 'Promo 2' },
      { url: 'https://picsum.photos/id/3/300/200', title: 'Promo 3' },
      { url: 'https://picsum.photos/id/4/300/200', title: 'Promo 4' },
      { url: 'https://picsum.photos/id/5/300/200', title: 'Promo 5' }
    ]
  };

  return (
    <GeistProvider>
      <CssBaseline />

      {appState === 'DEFAULT' && (
        <div>
          <figure>
            <img alt={data.ads[0].title} src={data.ads[0].url} />
          </figure>

          <button onClick={() => setAppState('LOADING')}>
            Tocca per iniziare
          </button>
        </div>
      )}
      {appState === 'LOADING' && (
        <button onClick={() => setAppState('FINAL')}>Finito</button>
      )}
      {appState === 'FINAL' && <p>Yey</p>}
    </GeistProvider>
  );
};

export default App;
