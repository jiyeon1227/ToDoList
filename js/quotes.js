const quotes =[
{
    quote:"삶은 계란이다.",
    author:""
},
{
    quote:"도망친 곳에 낙원은 없다.",
    author:""
},
{
    quote:"어느날 운명이 말했다. 작작 맡기라고.",
    author:""
},
{
    quote:"그럴 수 있지.",
    author:""
},
{
    quote:"생각을 해 지연아 승질내지말고",
    author:""
},
{
    quote:"저의 인생철학은 자신의 삶을 스스로 책임질 뿐만 아니라, 이 순간 최선을 다하면 다음 순간에 최고의 자리에 오를 수 있다는 것 입니다.",
    author:"Oprah Winfrey"
},
{
    quote:"대학 졸업장은 한 인간이 완성품이라는 증명이 아니라, 인생의 준비가 되었다는 표시이다.",
    author:"Edward A. Malloy"
},
{
    quote:"이 세상에 열정없이 이루어진 위대한 것은 없다.",
    author:"Georg Wilhelm"
},
{
    quote:"여러분을 더욱 높이 올려줄 사람만을 가까이 하세요.",
    author:"Oprah Winfrey"
},
{
    quote:"멘토는 유재석 손석희 같은 분들을 맨토로 삼지말고 븅x들로 설정해야 해요. 죽어도 저렇게는 되지 말고 늙지 말아야 겠다라고 생각하게",
    author:""
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
