import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import Author from "./screens/authors/Author";
import Book from "./screens/books/Book";
import Chapters from "./screens/books/chapters";
import Characters from "./screens/books/characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "author/:name",
        element: <Author />,
        children: [
          {
            path: ":book",
            element: <Book />,
            children: [
              {
                path: "chapters",
                element: <Chapters />
              },
              {
                path: "characters",
                element: <Characters />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
