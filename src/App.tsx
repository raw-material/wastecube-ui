import * as React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

type AppState = 'DEFAULT' | 'LOADING' | 'FINAL';

const App = () => {
  const [appState, setAppState] = React.useState<AppState>('DEFAULT');

  const data = {
    ads: [
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
    ]
  };

  return (
    <GeistProvider>
      <CssBaseline />

      {appState === 'DEFAULT' && (
        <div>
          <a
            href="https://caferati.me/demo/react-awesome-slider/autoplay"
            rel="noopener noreferrer"
            target="_blank"
          >
            slider docs
          </a>
          {/* data.ads */}
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
