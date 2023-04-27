import './App.css';
import { Blog } from './page/Blog';

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </header>

        <Blog />
      </div>
    </>
  );
}

export default App;
