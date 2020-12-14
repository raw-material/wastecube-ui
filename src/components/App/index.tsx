import * as React from 'react';
import DefaultView from '../DefaultView';
import LoadingView from '../LoadingView';

export interface IAd {
  title: string;
  url: string;
  isPromo?: boolean;
  description?: string;
}

export interface IType {
  title: string;
  description: string;
  image: string;
}

interface IAppData {
  ads: Array<IAd>;
  types: {
    left: IType;
    right: IType;
  };
}

type AppState = 'DEFAULT' | 'LOADING' | 'FINAL';

const states: Array<AppState> = ['DEFAULT', 'LOADING', 'FINAL'];

const App = () => {
  const [appState, setAppState] = React.useState<AppState>('DEFAULT');
  const [data, setData] = React.useState<IAppData | null>(null);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/data');
    const data = await response.json();
    console.dir(data);
    return data;
  };

  React.useEffect(() => {
    fetchData().then(setData);
  }, []);

  const changeState = (state: AppState) => (action: number) =>
    setAppState(states[states.indexOf(state) + action]);

  return (
    <div className="wastecube-ui-wrapper">
      {appState === 'DEFAULT' && (
        <DefaultView ads={data?.ads} changeState={changeState('DEFAULT')} />
      )}
      {appState === 'LOADING' && (
        <LoadingView types={data?.types} changeState={changeState('LOADING')} />
      )}
      {appState === 'FINAL' && <p>Yey</p>}
    </div>
  );
};

export default App;
