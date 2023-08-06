let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".card__quote");
let position = document.querySelector(".position");
let author = document.querySelector(".author__name");
let credit = document.querySelector(".credit");
let authorImg = document.querySelector(".author__img");

const quotes = [
  {
    quote:
      "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. ",
    author: "Steve Jobs",
    position: "Co-founder, Chairman, and CEO of Apple",
    credit: "illustration by Bhagvan Das",
    authorImg: "/images/image1.webp",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
    position:
      "German priest, theologian, author, hymnwriter, professor, and Augustinian friar.",
    credit: "illustration of The Pop Art Factory",
    authorImg: "/images/image2.webp",
  },
  {
    quote:
      "In complete darkness, we are all the same. It is only our knowledge and wisdom that separates us. Don't let your eyes deceive you",
    author: "Michael Jackson",
    position: "American singer, songwriter, dancer, and philanthropist",
    credit: "illustration by Bhagvan Das",
    authorImg: "/images/image3.webp",
  },
  {
    quote:
      "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science",
    author: "Albert Einstein",
    position:
      "German-born theoretical physicist, most influential scientists of all time",
    credit: "illustration by Abdelrahman Taymour",
    authorImg: "/images/image4.webp",
  },
  {
    quote:
      "Every day, there's a new development... there's no limit to the things that are happening.",
    author: "Stan Lee",
    position: "American comic book writer, editor, publisher, and producer",
    credit: "illustration found in reddit r/Art",
    authorImg: "/images/image5.webp",
  },
  {
    quote:
      "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    position: "Co-founded Facebook and Meta Platforms",
    credit: "illustration found  in UP Magazine",
    authorImg: "/images/image6.webp",
  },
  {
    quote:
      "The more you praise and celebrate your life, the more there is in life to celebrate",
    author: "Oprah Winfrey",
    position:
      "host, television producer, actress, author, and media proprietor.",
    credit: "illustration found in comicbookandmovie reviews",
    authorImg: "/images/image7.webp",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
    position:
      "CEO and product architect of Tesla, Inc. the owner and CTO of Twitter",
    credit: "illustration found in Dreamstime",
    authorImg: "/images/image8.webp",
  },
  {
    quote:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barrack Obama",
    position: "44th president of theUnited States from 2009 to 2017",
    credit: "illustration by Aaron Sacco",
    authorImg: "/images/image9.webp",
  },
  {
    quote:
      "I don't want to be remembered as the girl who was shot. I want to be remembered as the girl who stood up.",
    author: "Malala Yousafzai",
    position: "education activist and the 2014 Nobel Peace Prize laureate",
    credit: "illustration by Aaron Sacco",
    authorImg: "/images//image10.webp",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
  position.innerText = quotes[random].position;
  credit.innerText = quotes[random].credit;
  authorImg.src = quotes[random].authorImg;
});
