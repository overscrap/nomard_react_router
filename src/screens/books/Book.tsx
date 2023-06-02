import { Link, Outlet, useParams } from "react-router-dom";

function Book() {
  const { book } = useParams();

  return (
    <div>
      <h2>
        {book
          .replace("_", " ")
          .replace("_", " ")
          .replace("_", " ")
          .replace("_", " ")}
      </h2>
      <ul>
        <li>
          <Link to={`chapters`}>Chapters</Link>
        </li>
        <li>
          <Link to={`characters`}>Characters</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Book;
