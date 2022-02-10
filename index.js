const searchBox = document.querySelector('input');
const img = document.querySelector('img');
const btn = document.querySelector('button');
const btnText = document.createElement('span');

btnText.innerText = "Click Me to Get a new GIPHY image";
btn.appendChild(btnText);
btn.addEventListener('click', function() {
  main();
})
searchBox.addEventListener('keyup', function(e) {
  if (e.code === 'Enter') {
    e.preventDefault();
    btn.click();
  }
})

async function main() {
  const searchVal = searchBox.value;
  let searchStr;
  if (searchVal) {
    searchStr = searchVal;
  } else {
    searchStr = 'cats';
  }
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=KNVWla7Z7WXqYzx2YqbadGQXLpN0nCMn&s=' + searchStr, {mode: 'cors'})
  const srchData = await response.json();
  img.src = srchData.data.images.original.url;
}

main();
