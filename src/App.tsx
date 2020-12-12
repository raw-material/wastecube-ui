import * as React from 'react';
import DefaultView from './components/DefaultView';
import LoadingView from './components/LoadingView';

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
    <div className="wastecube-ui-wrapper">
      {appState === 'DEFAULT' && (
        <DefaultView changeState={() => setAppState('LOADING')} />
      )}
      {appState === 'LOADING' && (
        <LoadingView changeState={() => setAppState('FINAL')} />
      )}
      {appState === 'FINAL' && <p>Yey</p>}
    </div>
  );
};

export default App;
