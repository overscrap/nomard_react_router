import { Link, Outlet, useParams } from "react-router-dom";
import { books } from "../../db";

function Author() {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {books.map((book) => (
          <div>
            {name === book.author ? (
              <li key={book.id}>
                <Link to={`/author/${name}/${book.book}`}>{book.name}</Link>
              </li>
            ) : null}
          </div>
        ))}
      </ul>
      <Outlet
        context={{
          authorName: name
        }}
      />
    </div>
  );
}

export default Author;
