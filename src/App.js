
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Main from './Component/Layout/Main';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path: "/",
          element: <Courses></Courses>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
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
