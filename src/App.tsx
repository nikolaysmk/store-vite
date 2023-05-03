import { Provider } from 'react-redux';

import { store } from './store';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Counter } from './features/counter/Counter';

import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />

        <h1>App tsx</h1>
        <Counter />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
