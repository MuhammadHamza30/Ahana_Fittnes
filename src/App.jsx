import '../src/Css/App.css'
import Home from './pages/Home';
import About from './pages/About';
import OurClass from './pages/OurClass';
import ClassDetail from './pages/ClassDetail';
import OurTrainer from './pages/OurTrainer';
import TrainerDetail from './pages/TrainerDetail';
import OurEvent from './pages/OurEvent';
import EventDetail from './pages/EventDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {

  
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/OurClass",
      element:<OurClass/>
    },
    {
      path:"/ClassDetail",
      element:<ClassDetail/>
    },
    {
      path:"/OurTrainer",
      element:<OurTrainer/>
    },
    {
      path:"/TrainerDetail",
      element:<TrainerDetail/>
    },
    {
      path:"/OurEvent",
      element:<OurEvent/>
    },
    {
      path:"/EventDetail",
      element:<EventDetail/>
    },
    {
      path:"/Blog",
      element:<Blog/>
    },
    {
      path:"/BlogDetail",
      element:<BlogDetail/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
  ])

  return (
<RouterProvider router={router}/>

  )
}

export default App
