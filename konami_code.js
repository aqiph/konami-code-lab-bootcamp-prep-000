const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let p = document.createElement('p');
  p.innerText = 'Hellow World';
  document.body.appendChild(p);
  let count = 0;
  document.body.addEventListener('keydown', (event) => {
    if (event.key === codes[count]){
      count++;
    }
    else{
      alert('Again!')
      count = 0;
    }
    if (count === codes.length){
      alert('Konami!');
      count = 0;
    }
  })
}
