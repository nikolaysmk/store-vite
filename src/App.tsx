import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Blog } from './page/Blog';
import { Dashboard } from './components/Dashboard';
import { Preferences } from './components/Preferences';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Blog />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="preferences" element={<Preferences />} />
    </>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
