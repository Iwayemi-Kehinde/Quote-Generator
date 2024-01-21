const quote = document.getElementById("quote")
const author = document.getElementById("author")
const generate = document.getElementById("generate")
const copy = document.getElementById("copy")
const loader = document.getElementById("loader")
const API_URL = "https://api.quotable.io/random"
async function getQuote(url) {
  const res = await fetch(url)
  const data = await res.json()
  quote.innerHTML = data.content
  author.innerHTML = data.author
}
getQuote(API_URL)
tweet.onclick = function () {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----" + author.innerHTML, "Tweet Window", "width=600", "height=400")
}
generate.onclick = function () {
  getQuote(API_URL)
  copy.innerHTML = "Copy"
}

setTimeout(() => {
  loader.classList.add("show")
}, 3000);


function copyTextToClipboard() {
  var textToCopy = `"${quote.textContent}" by ${author.textContent}`;
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy")
  document.body.removeChild(textarea);
  copy.innerHTML = "Copied!"
}


copy.addEventListener("click", function () {
  copyTextToClipboard()
})

setInterval(() => {
  if(navigator.onLine === false) {
    quote.innerHTML = "CONNECT YOUR DEVICE TO INTERNET"
    author.innerHTML = "NOT CONNECTED"
  }
}, 1000);

