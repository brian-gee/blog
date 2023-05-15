import miniHabits from '../content/books/mini-habits.jpg';
import howToWinFriends from '../content/books/how-to-win-friends.jpg';
import howToBeAnImperfectionist from '../content/books/imperfectionist.jpg';
import soundtracks from '../content/books/soundtracks.jpg';
import youreTooGood from '../content/books/youre-too-good.jpg';
import keepGoing from '../content/books/keep-going.jpeg';
import bigThinking from '../content/books/the-magic-of-thinking-big.jpeg';
import cheese from '../content/books/who-moved-my-cheese.jpeg';

export const books = [
  {
    title: 'Who Moved My Cheese?',
    author: 'Spencer Johnson',
    comment: 'A short guide to dealing with change.',
    img: cheese,
    year: 1999,
    reading: true,
    loading: 'eager',
  },
  {
    title: 'The Magic of Thinking Big',
    author: 'David J. Schwartz',
    comment:
      'How to use the power of thinking big to achieve your goals and live a happier life.',
    img: bigThinking,
    year: 1959,
    reading: true,
    loading: 'eager',
  },
  {
    title: 'Keep Going: 10 Ways to Stay Creative in Good Times and Bad',
    author: 'Austin Kleon',
    comment:
      'A great book on how to stay creative and productive in the face of adversity.',
    img: keepGoing,
    year: 2019,
    reading: false,
    loading: 'eager',
  },
  {
    title: "You're Too Good to Feel This Bad",
    author: 'Nate Dallas',
    comment:
      'Great explanation of why habits are so important and how to turn small actions into big results.',
    img: youreTooGood,
    year: 2020,
    reading: false,
    loading: 'eager',
  },
  {
    title: 'Mini Habits',
    author: 'Stephen Guise',
    comment:
      'Great explanation of why habits are so important and how to turn small actions into big results.',
    img: miniHabits,
    year: 2013,
    reading: false,
    loading: 'eager',
  },
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    comment:
      'Practical advice on how to improve your social skills and relationships.',
    img: howToWinFriends,
    year: 1936,
    reading: false,
    loading: 'eager',
  },
  {
    title: 'Soundtracks: The Surprising Solution to Overthinking',
    author: 'Jon Acuff',
    comment: 'A guide to overcoming the negative soundtracks within our minds.',
    img: soundtracks,
    year: 2021,
    reading: false,
    loading: 'eager',
  },
  {
    title:
      'How to Be an Imperfectionist: The New Way to Fearlessness, Confidence, and Freedom from Perfectionism',
    author: 'Stephen Guise',
    comment:
      'Strategies for overcoming the negative impact of perfectionism, including fear and anxiety.',
    img: howToBeAnImperfectionist,
    year: 2015,
    reading: false,
    loading: 'eager',
  },
];
