
var allQuotes=[
    {
        author:"Santosh Kalwar",
        quote:"Coding like poetry should be short and concise."
    },
    {
        author:"John Johnson",
        quote:"First, solve the problem. Then, write the code."
    },
    {
        author:"Cory House",
        quote:"Code is like humor. When you have to explain it, it's bad."
    },
    {
        author:"Kent Beck",
        quote:"Make it work, make it right, make it fast."
    },
    {
        author:" Mark Twain",
        quote:"If you tell the truth, you don't have to remember anything."
    },
    {
        author:"Robert C. Martin",
        quote:"Of course, bad code can be cleaned up. But it's very expensive."
    },
    {
        author:"Dr. Christopher Dayagdag",
        quote:"We don't just sell websites, we create websites that SELL."
    },
    {
        author:"Chris Pine",
        quote:"Programming isn't about what you know; it's about what you can figure out."
    },
    {
        author:"Thomas Fuchs",
        quote:"The best error message is the one that never shows up."
    },
]
var author=document.getElementById("author");
var quote= document.getElementById("quote");
var arr = [];

function generateQuote(){
    while (arr.length < allQuotes.length) {
        var random= Math.floor(Math.random() * allQuotes.length);
         if (arr.indexOf(random) === -1) {
           arr.push(random);
           author.innerHTML=allQuotes[random].author;
           quote.innerHTML= allQuotes[random].quote;
           console.log(random);
           break;
            }
    }
}



