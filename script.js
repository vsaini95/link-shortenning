const inputDiv = document.querySelector(".inputDiv");
const collapseContent = document.querySelector(".collapseContent");
const rapper = document.querySelector(".rapper");
let input = document.querySelector(".inputUrl");
const shortenBtn = document.querySelector(".shortenBtn");
const navicon = document.querySelector(".navicon");

function addLink(link, shorten) {
  return `<div class="ulink">${link}</div>
  <div class="slink"><div class="shorten">${shorten}</div>
  <button class="copy">Copy</button></div>`;
}

shortenBtn.addEventListener("click", function (e) {
  if (input.value) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}.html`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("not fetched data");
        }
      })
      .then((data) => {
        let link = data;
        console.log(data);
        //console.log(link.result.short_link);
        const div = document.createElement("div");
        div.classList.add("flex");
        div.innerHTML = addLink(input.value, `${link.result.full_short_link}`);
        rapper.appendChild(div);
        input.value = "";
      })
      .catch((err) => console.error(err));
  } else {
    const p = document.createElement("p");
    const msg = document.createTextNode("Please add a link");
    p.appendChild(msg);
    p.classList.add("redtext");
    inputDiv.after(p);
    input.classList.add("redOut");
  }
});

rapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy")) {
    e.target.style.backgroundColor = " hsl(257, 27%, 26%)";
    e.target.innerHTML = "Copied";
    let copyText = e.target.previousElementSibling.textContent;
    navigator.clipboard.writeText(copyText);
  }
});
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("navicon")) {
    collapseContent.classList.add("collapseV");
  } else {
    collapseContent.classList.remove("collapseV");
  }
});
