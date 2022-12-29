const quotes = [
  {
    quote: "근데 뭐 그때 더 열심히 할걸... 이라는 생각은 안 들어",
    author: "양파쿵야",
  },
  {
    quote: "계획은 무슨! 계획대로 안되는 게 인생이란 거야. 똑똑히 기억해 둬!",
    author: "짱구는 못 말려",
  },
  {
    quote: "남들은 다 하는데, 너만 못하는 건 절대 없어",
    author: "도라에몽",
  },
  {
    quote: "너에겐 별처럼 많은 가능성이 있었고, 네가 그걸 잡은 것 뿐이야",
    author: "도라에몽",
  },
  {
    quote: "발걸음이 떨어지질 않아. 이대로 영원히 네 옆에서 살 수 있으면 얼마나 좋을까",
    author: "도라에몽",
  },
  {
    quote: "여기 지구에서는 마음껏 노래를 부를 수가 있어서 좋아, 삐요! 그냥은 안 들려줄거야, 삐요!",
    author: "삐요",
  },
  {
    quote: "오랜만이다, 삐요-!",
    author: "삐요",
  },
  {
    quote: "안 귀엽다니까! 실례잖아, 삐요!",
    author: "삐요",
  },
  {
    quote: "개미는 뚠뚠 오늘도 뚠뚠 열심히 일을 하네",
    author: "짱구는 못말려",
  },
  {
    quote: "I make time for people who make time for me",
    author: "minions",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
