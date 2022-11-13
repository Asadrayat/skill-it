
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Main from './Component/Layout/Main';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Error from './Component/Error/Error';
import CourseCatagory from './CourseCatagory/CourseCatagory';
import Allcourses from './Component/Allcourses/Allcourses';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Home from './Component/Home/Home';
import CheckOut from './CourseCatagory/CheckOut/CheckOut';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses'),
        },
        {
          path: "/",
          element: <Home></Home>,
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
          path: "courses/catagory/:id/checkout",
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
        },
        {
          path: "courses/catagory/:id",
          element: <CourseCatagory></CourseCatagory>,
          loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
        },
        {
          path: "/courses/:id",
          element: <Allcourses></Allcourses>,
        }

      ]
    }
  ]);
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
