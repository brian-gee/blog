import Badge from './Badge';

interface Props {
  title: string;
  img: string;
  author: string;
  year: number;
  reading?: boolean;
  link: string;
  loading?: 'lazy' | 'eager';
}

const BookCard: React.FC<Props> = ({
  title,
  img,
  author,
  year,
  reading = false,
  link,
  loading = 'lazy',
}) => {
  return (
    <li className="list-none w-full">
      <a href={link} target="_blank" rel="noreferrer">
        <article className="flex gap-10">
          <div className="overflow-hidden rounded-lg">
            <img src={img} alt={title} className="w-40" loading={loading} />
          </div>
          <div className="w-full pt-6">
            <h2 className="mb-1 space-x-2 text-xl font-semibold">{title}</h2>
            <div className="mb-2 flex flex-col gap-2">
              <p className="space-x-0.5 text-sm">
                <span>{author}</span> <span>&middot;</span>
                <span>{year}</span>
              </p>
              {reading && <Badge text="reading" color="indigo" />}
            </div>
          </div>
        </article>
      </a>
    </li>
  );
};

export default BookCard;
