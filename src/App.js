import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import IndividualProjectDescription from './components/IndividualProjectDescription';
import { useState } from 'react';


function App() {

    const [isDark, setIsDark] = useState(false)

    function colorMode() {
      setIsDark(prevmode => !prevmode)
    }


    const router = createBrowserRouter([
    {path: '/',
    element: <Home isDark={isDark} colorMode={colorMode}/> ,
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
