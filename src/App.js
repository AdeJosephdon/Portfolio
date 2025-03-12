import './App.css';
import { useContext } from "react";
import { DataContext } from "./components/DataContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import IndividualProjectDescription from './pages/IndividualProjectDescription';


function App() {

  const { isDark } = useContext(DataContext);


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
    <div className="App" dark-theme={isDark ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
