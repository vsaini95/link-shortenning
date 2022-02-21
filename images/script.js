const inputDiv = document.querySelector(".inputDiv");
let input = document.querySelector(".inputUrl");

inputDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("shortenBtn")) {
    //let item = e.target.previousElementSibling;
    console.log(input.value);
  }
});
