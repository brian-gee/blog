import harryPotterAndTheDeathlyHallows from "./books/harryPotterAndTheDeathlyHallows.jpg?url";
import harryPotterAndTheHalfbloodPrince from "./books/harryPotterAndTheHalfbloodPrince.jpg?url";
import harryPotterAndTheOrderOfThe from "./books/harryPotterAndTheOrderOfThe.jpg?url";
import harryPotterAndTheGobletOfFire from "./books/harryPotterAndTheGobletOfFire.jpg?url";
import harryPotterAndThePrisonerOfAzkaban from "./books/harryPotterAndThePrisonerOfAzkaban.jpg?url";
import harryPotterAndTheChamberOfSecrets from "./books/harryPotterAndTheChamberOfSecrets.jpg?url";
import harryPotterAndTheSorcerersStone from "./books/harryPotterAndTheSorcerersStone.jpg?url";
import miniHabits from "./books/mini-habits.jpg?url";
import howToWinFriends from "./books/how-to-win-friends.jpg?url";
import howToBeAnImperfectionist from "./books/imperfectionist.jpg?url";
import soundtracks from "./books/soundtracks.jpg?url";
import youreTooGood from "./books/youre-too-good.jpg?url";
import keepGoing from "./books/keep-going.jpeg?url";
import cheese from "./books/who-moved-my-cheese.jpeg?url";
import alchemist from "./books/alchemist.jpeg?url";
import untetheredSoul from "./books/the-untethered-soul.jpg?url";
import buddhismBeginners from "./books/buddhism-for-beginners.jpg?url";
import songOfAchilles from "./books/song-of-achilles.jpg?url";
import circe from "./books/circe.jpg?url";
import tippingPoint from "./books/the-tipping-point.jpg?url";
import outliers from "./books/outliers.jpg?url";
import blink from "./books/blink.jpg?url";
import midnightLibrary from "./books/midnight-library.jpg?url";
import you from "./books/you.jpg?url";
import hiddenBodies from "./books/hidden-bodies.jpg?url";
import navalRavikant from "./books/naval-ravikant.jpg?url";
import flowersForAlgernon from "./books/flowers-for-algernon.jpg?url";
import eastOfEden from "./books/east-of-eden.jpg?url";
import avisitFromTheGoonSquad from "./books/a-visit-from-the-goon-squad.jpg?url";
import theSirensOfTitan from "./books/the-sirens-of-titan.jpg?url";

type Book = {
  title: string;
  author: string;
  img: string;
  year: number;
  reading: boolean;
  link: string;
  loading: string;
};

export const books: Book[] = [
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    img: harryPotterAndTheDeathlyHallows,
    year: 2007,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    img: harryPotterAndTheHalfbloodPrince,
    year: 2005,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    img: harryPotterAndTheOrderOfThe,
    year: 2003,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    img: harryPotterAndTheGobletOfFire,
    year: 2000,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    img: harryPotterAndThePrisonerOfAzkaban,
    year: 1999,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    img: harryPotterAndTheChamberOfSecrets,
    year: 1998,
    reading: false,
    link: "link",
    loading: "eager",
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    img: harryPotterAndTheSorcerersStone,
    year: 1997,
    reading: false,
    link: "link",
    loading: "eager",
  },
  // {
  //   title: "",
  //   author: "",
  //   img: ,
  //   year: ,
  //   reading: false,
  //   link: "",
  //   loading: "eager",
  // },
  {
    title: "The Sirens of Titan",
    author: "Kurt Vonnegut Jr.",
    img: theSirensOfTitan,
    year: 1959,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "A Visit from the Goon Squad",
    author: "Jennifer Egan",
    img: avisitFromTheGoonSquad,
    year: 2010,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "East of Eden",
    author: "John Steinbeck",
    img: eastOfEden,
    year: 1952,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    img: flowersForAlgernon,
    year: 1966,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
    author: "Eric Jorgenson",
    img: navalRavikant,
    year: 2020,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Hidden Bodies",
    author: "Caroline Kepnes",
    img: hiddenBodies,
    year: 2016,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "You",
    author: "Caroline Kepnes",
    img: you,
    year: 2014,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    img: midnightLibrary,
    year: 2020,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Blink",
    author: "Malcolm Gladwell",
    img: blink,
    year: 2005,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    img: outliers,
    year: 2008,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Tipping Point: How Little Things Can Make a Big Difference",
    author: "Malcolm Gladwell",
    img: tippingPoint,
    year: 2000,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    img: circe,
    year: 2018,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    img: songOfAchilles,
    year: 2011,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title:
      "No-Nonsense Buddhism for Beginners: Clear Answers to Burning Questions About Core Buddhist Teachings",
    author: "Noah Rasheta",
    img: buddhismBeginners,
    year: 2018,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Untethered Soul: The Journey Beyond Yourself",
    author: "Michael A. Singer",
    img: untetheredSoul,
    year: 2007,
    reading: false,
    link: "",
    loading: "eager",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: alchemist,
    year: 1988,
    reading: false,
    link: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?crid=783KBVNBJN1O&amp;keywords=the+alchemist&amp;qid=1684985085&amp;sprefix=the+alchemist%252Caps%252C113&amp;sr=8-1&_encoding=UTF8&tag=briangee0c-20&linkCode=ur2&linkId=38e3f9d5de35fd2090f403235128a243&camp=1789&creative=9325",
    loading: "eager",
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    img: cheese,
    year: 1999,
    reading: false,
    link: "https://www.amazon.com/Who-Moved-My-Cheese-Amazing/dp/0399144463/ref=sr_1_3?keywords=who+moved+my+cheese&amp;qid=1685413309&amp;sprefix=who+moved+my+%252Caps%252C113&amp;sr=8-3&_encoding=UTF8&tag=briangee0c-20&linkCode=ur2&linkId=910b279b214d7a1428195813cb59217e&camp=1789&creative=9325",
    loading: "eager",
  },
  {
    title: "Keep Going: 10 Ways to Stay Creative in Good Times and Bad",
    author: "Austin Kleon",
    img: keepGoing,
    year: 2019,
    reading: false,
    loading: "eager",
  },
  {
    title: "You're Too Good to Feel This Bad",
    author: "Nate Dallas",
    img: youreTooGood,
    year: 2020,
    reading: false,
    loading: "eager",
  },
  {
    title: "Mini Habits",
    author: "Stephen Guise",
    img: miniHabits,
    year: 2013,
    reading: false,
    loading: "eager",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    img: howToWinFriends,
    year: 1936,
    reading: false,
    loading: "eager",
  },
  {
    title: "Soundtracks: The Surprising Solution to Overthinking",
    author: "Jon Acuff",
    img: soundtracks,
    year: 2021,
    reading: false,
    loading: "eager",
  },
  {
    title: "How to Be an Imperfectionist",
    author: "Stephen Guise",
    img: howToBeAnImperfectionist,
    year: 2015,
    reading: false,
    loading: "eager",
  },
];
