var arr = [
  {
    quote: "                 “So many books, so little time.”  ",
    who: "                          Frank Zappa",
  },
  {
    quote:
      "                     “To live is the rarest thing in the world. Most people exist, that is all.” ",
    who: "                                      Oscar Wilde  ",
  },
  {
    quote:
      "                              “Without music, life would be a mistake.” ",
    who: "                    Friedrich Nietzsche, Twilight of the Idols  ",
  },
  {
    quote:
      "                 “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
    who: " Ralph Waldo Emerson ",
  },
  {
    quote:
      " “It is better to be hated for what you are than to be loved for what you are not.” ",
    who: "  Andre Gide, Autumn Leaves ",
  },
  {
    quote: "“Be yourself; everyone else is already taken.” ",
    who: "Oscar Wilde ",
  },
  {
    quote:
      "“Not all of us can do great things. But we can do small things with great love.”",
    who: " Mother Teresa  ",
  },
  {
    quote:
      " “Life is like riding a bicycle. To keep your balance, you must keep moving.” ",
    who: "Albert Einstein ",
  },
];

function getRandomNumber() {
  var num = Math.round(Math.random() * arr.length);
  document.getElementById("apper").innerHTML = arr[num].quote;
  document.getElementById("author").innerHTML = arr[num].who;
}
