import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const generateUser = _ => ({
  name:'pseudo random',
  id: Date.now()
})

function App() {

   useEffect(()=>{
      window.dataLayer.push({ event: "pageView", pageName: "index" });
      const user =  generateUser();
      window.mixpanel.identify(user.id);
      window.mixpanel.track("mixpanel:pageView", {"genre": "hip-hop", "duration in seconds": 42});
   },[])

  const trackEvent = type =>{
     window.mixpanel.track(type,{timestamp:Date.now()});
   }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <div>
          <button onClick={()=>trackEvent("play")}>play</button>
          <button onClick={()=>trackEvent("pause")}>pause</button>
          <button onClick={()=>trackEvent("resume")}>resume</button>
        </div>
        <div className="whitespace"></div>
        <div className="trackable-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu tellus vel tortor bibendum congue. Curabitur
            fermentum sagittis ligula non pretium. Proin vel neque eu dui auctor
            euismod eget id neque. Vestibulum mi magna, iaculis eget posuere
            congue, sodales a est. Morbi suscipit, orci non auctor bibendum,
            purus lorem ultricies est, sit amet posuere odio nunc sagittis
            augue. Mauris pharetra dolor ornare, venenatis sem ut, pulvinar mi.
            Ut luctus turpis id est dignissim aliquam. Cras sed posuere enim.
            Mauris varius leo eu dictum eleifend. Vestibulum dignissim ultricies
            magna, sit am
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
