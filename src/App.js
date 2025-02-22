import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import IndividualProjectDescription from './components/IndividualProjectDescription';


function App() {

    const router = createBrowserRouter([
    {path: '/',
    element: <Home /> ,
    errorElement: <NotFoundPage />
    },
    {path: '/contact',
    element: <Contact /> 
    },
    {path: '/about',
    element: <About /> 
    },
    {path: '/projects',
    element: <Projects /> 
    },
    {path: '/techStack',
    element: <TechStack /> 
    },
    {path: '/individualprojectdescription/:productId',
    element: <IndividualProjectDescription /> 
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
