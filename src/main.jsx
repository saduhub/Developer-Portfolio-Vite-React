import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'aboutme', element: <Aboutme /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resume', element: <Resume /> },
      { path: 'work', element: <Work /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
