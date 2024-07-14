import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import requests from './Configuration/request';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Banner/>

      <Row title='Netflix originals' fetchUrl={requests.originals} isLarger />
      <Row title='Trending Now'fetchUrl={requests.trending}/>
      <Row title='Comdey Movies' fetchUrl={requests.ComedyMovies} />
      <Row title='Horror Movies'fetchUrl={requests.HorrorMovies}/>
      <Row title='Action Movies' fetchUrl={requests.ActionMovies} />
      <Row title='Romance'fetchUrl={requests.RomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.Documentaries} />

    </div>
  );
}

export default App;
