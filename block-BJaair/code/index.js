let form = document.querySelector("form");
let root = document.querySelector("ul");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardsData.push({ title, category });
  localStorage.setItem("cards", JSON.stringify(cardsData));
  createUI(cardsData, root);
});

function handleEdit(event, info, id, label) {
  let elm = event.target;
  let input = document.createElement("input");
  input.value = info;
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let updatedValue = event.target.value;
      cardsData[id][label] = updatedValue;
      createUI();
    }
  });
  input.addEventListener("blur", (event) => {
    let updatedValue = event.target.value;
    cardsData[id][label] = updatedValue;
    createUI();
  });
  let parent = event.target.parentElement;
  parent.replaceChild(input, elm);
}

function createUI(data = cardsData, root = ul) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = cardInfo.category;
    p.addEventListener("dblclick", (event) =>
      handleEdit(event, cardInfo.category, index, "category")
    );
    let h2 = document.createElement("h2");
    h2.innerText = cardInfo.title;
    h2.addEventListener("dblclick", (event) =>
      handleEdit(event, cardInfo.title, index, "title")
    );
    li.append(p, h2);
    fragment.appendChild(li);
  });
  root.append(fragment);
}

createUI(cardsData, root);