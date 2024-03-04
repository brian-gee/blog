import BookCard from "./BookCard";
import { books } from "../content/books";

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const BookList = () => {
  // Shuffle the books array before rendering
  const shuffledBooks = shuffleArray([...books]);

  return (
    <div className="mx-auto mt-12 grid max-w-5xl gap-10 xl:max-w-7xl">
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {shuffledBooks.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
            year={book.year}
            img={book.img}
            loading={book.loading as "lazy" | "eager"}
            link={book.link}
            reading={book.reading}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
