import miniHabits from '../content/books/mini-habits.jpg';
import howToWinFriends from '../content/books/how-to-win-friends.jpg';
import howToBeAnImperfectionist from '../content/books/imperfectionist.jpg';
import soundtracks from '../content/books/soundtracks.jpg';
import youreTooGood from '../content/books/youre-too-good.jpg';
import keepGoing from '../content/books/keep-going.jpeg';
import bigThinking from '../content/books/the-magic-of-thinking-big.jpeg';
import cheese from '../content/books/who-moved-my-cheese.jpeg';
import fourThousand from '../content/books/four-thousand-weeks.jpeg';
import alchemist from '../content/books/alchemist.jpeg';

export const books = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    comment: 'A great story about following your dreams.',
    img: alchemist,
    year: 1988,
    reading: true,
    link: 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?crid=783KBVNBJN1O&amp;keywords=the+alchemist&amp;qid=1684985085&amp;sprefix=the+alchemist%252Caps%252C113&amp;sr=8-1&_encoding=UTF8&tag=briangee0c-20&linkCode=ur2&linkId=38e3f9d5de35fd2090f403235128a243&camp=1789&creative=9325',
    loading: 'eager',
  },
  {
    title: 'Four Thousand Weeks: Time Management for Mortals',
    author: 'Oliver Burkeman',
    comment:
      "Advocates embracing life's brevity to cultivate meaning rather than attempting to do everything.",
    img: fourThousand,
    year: 2021,
    reading: true,
    loading: 'eager',
  },
  {
    title: 'Who Moved My Cheese?',
    author: 'Spencer Johnson',
    comment: 'A short guide to dealing with change.',
    img: cheese,
    year: 1999,
    reading: false,
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
    title: 'How to Be an Imperfectionist',
    author: 'Stephen Guise',
    comment:
      'Strategies for overcoming the negative impact of perfectionism, including fear and anxiety.',
    img: howToBeAnImperfectionist,
    year: 2015,
    reading: false,
    loading: 'eager',
  },
];
