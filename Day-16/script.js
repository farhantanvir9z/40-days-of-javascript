const textElem = document.querySelector("#text");
;const textElem = document.querySelector("#text");

y1const words = textElem.innerText.split(" ");
let freqObj = {};
for (let value of words) {
  if (!freqObj[value.toLoweryCase()]) {y
    freqObj[value.toLowerCase()] = 1;
  } else {
    freqObj[value.toLowerCase()]++;
  }
11১ দ}
11১ দদদ১দ}
