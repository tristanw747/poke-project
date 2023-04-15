import { Routes, Route, Navigate } from 'react-router-dom';
import { PokedexView } from './components/PokedexView';
import { DetailsView } from './components/DetailsView';
import { Navigation } from './components/Navigation';
import { Heading } from './components/Heading';
import { withRouter } from './HOCs';
import PokemonsProvider from './context/PokemonsProvider';
import generations from './data/generations';
import './App.css';

function App() {
  return (
    <PokemonsProvider>
      <div className="pokedex-app">
        <Heading />
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate replace to={generations[0].link} />}>
          </Route>
          {
            generations.map(({ id, link }) => (
              <Route key={id} path={'/' + link} element={<PokedexView generation={id} />}>
              </Route>
            ))
          }
        </Routes>

        <DetailsView />
      </div>
    </PokemonsProvider>
  );
}

export default withRouter(App);
