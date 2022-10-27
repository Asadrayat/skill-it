
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Main from './Component/Layout/Main';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import Error from './Component/Error/Error';
import CourseCatagory from './CourseCatagory/CourseCatagory';
import Allcourses from './Component/Allcourses/Allcourses';
import Home from './Component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error>,
      children : [
        {
          path: "/home",
          element: <Home></Home> ,
          loader : () => fetch('http://localhost:5000/courses'),
        },
        {
          path: "/courses",
          element: <PrivateRoute><Courses></Courses></PrivateRoute> ,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/catagory/:id",
          element: <CourseCatagory></CourseCatagory> ,
          loader : ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`),
        },
        {
          path: "/courses/:id",
          element: <Allcourses></Allcourses> ,
        }
      
      ]
    }
  ]);
  return (
    <div class='container'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
