console.log("Day-20");
function cloning(title, disc) {
const template = document.querySelector("#template-card");
const clone = template.content.cloneNode(true);
const firstElement = clone.firstElementChild.children[0];
firstElement.innerText = title;
firstElement.nextElementSibling.innerText = disc;
document.body.appendChild(clone);
const hr = document.createElement("hr");
document.body.appendChild(hr);

}
for (let i = 0; i < 10; i++) {
  cloning("hello", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, itaque?");
}


const fragment = document.createDocumentFragment();

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.innerText = `item ${i}`;
  fragment.appendChild(li);
}
 document.querySelector("#list").appendChild(fragment)
 
 // range
 
 const range = document.createRange()
 const p = document.querySelector("#para");
 range.setStart(p.firstChild, 5)
 range.setEnd(p.childNodes[3], 5)
 const contents = range.cloneContents();
 consolr.log(contents)