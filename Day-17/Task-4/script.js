const contentElem = document.querySelector("#content");

const replaceBtn = document.querySelector("#replaceBtn");



replaceBtn.addEventListener("click", replaceWord);

function replaceWord() {
  const text = contentElem.innerText;
  const findWordInput = document.querySelector("#findWord").value;
  const replaceWordInput = document.querySelector("#replaceWord").value;
  if (findWordInput === "" || replaceWordInput === "") return;
  const replacedText = text.replaceAll(findWordInput, replaceWordInput);
  contentElem.innerText = replacedText;
}

