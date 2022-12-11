import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/BLog/Blog";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import Home from "../Pages/Home/Home";
import Project1 from "../Pages/ProjectDetails/Project1/Project1";
import Project2 from "../Pages/ProjectDetails/Project2/Project2";
import Project3 from "../Pages/ProjectDetails/Project3/Project3";
import Projects from "../Pages/Projects/Projects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/project1",
        element: <Project1></Project1>,
      },
      {
        path: "/project2",
        element: <Project2></Project2>,
      },
      {
        path: "/project3",
        element: <Project3></Project3>,
      },
    ],
  },
]);
