let n = 0;

function decrement() {
  n--;
  [
    (document.getElementById("quantity").innerHTML = `${n}`),
    (document.getElementById("output").innerHTML = `<h2>$${n * 40}</h2>`),
  ];
}

function increment() {
  n++;
  [
    (document.getElementById("quantity").innerHTML = `${n}`),
    (document.getElementById("output").innerHTML = `<h2>$${n * 40}</h2>`),
  ];
}

function myFunc() {}
