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
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
      { url: 'https://picsum.photos/200/300', title: '' },
    ]
  };


  var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
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
          { /* data.ads */
        	  
          	   data.ads.map(data => {
          	   	return(
          	   		<div key={data}>
          	   			<img alt="image" src={data} />
          	   		</div>
          	   	)
          	   })
               


          	
          }

          
         	
          
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
