import BookCard from './BookCard';
import { books } from '../content/books';

const BookList = () => {
  return (
    <div className="grid gap-10 mx-auto max-w-xl xl:max-w-7xl mt-12">
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {books
          .sort(() => Math.random() - 0.5)
          .map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              year={book.year}
              img={book.img}
              loading={book.loading as 'lazy' | 'eager'}
              link={book.link}
              reading={book.reading}
            />
          ))}
      </ul>
    </div>
  );
};

export default BookList;
