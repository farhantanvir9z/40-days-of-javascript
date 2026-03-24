const textElem = document.querySelector("#text");
const mostFreqTextElem = document.querySelector("#mostFreqText");

const textArr = textElem.innerText.toLowerCase().replace(/[^\w\s]/g, "").split(" ");

const freq = {};

for (let x of textArr) {
  if (!freq[x]) {
    freq[x] = 1;
  } else {
    freq[x]++;
  }
}

let maxFreq = 0;
let maxFreqWord;
for (let i in freq) {
    if (freq[i] > maxFreq) {
      maxFreq = freq[i];
      maxFreqWord = i;
    }
}

mostFreqTextElem.innerText = `Most frequently user word is: "${maxFreqWord}". Word count: ${maxFreq}`