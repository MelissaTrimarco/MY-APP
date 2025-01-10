import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Mel Robbins",
    title: "The Let Them Theory",
    img: "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
