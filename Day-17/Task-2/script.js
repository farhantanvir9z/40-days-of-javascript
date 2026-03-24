const cars = [...document.querySelector("#cars").children];

let len = cars.length;
for (let i = 0; i < len; i++){
  cars[i].style.backgroundColor = (i % 2 !== 0) ? "white" : "black";
  cars[i].style.color = (i % 2 !== 0) ? "black" : "white";
}