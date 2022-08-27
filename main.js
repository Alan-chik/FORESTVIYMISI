let openUp = document.querySelectorAll(".asdfefef");
let closeUp = document.querySelector(".pop_up_close");
let menu = document.querySelector(".pop_up");
for (let i = 0; i < openUp.length; i++) {
  openUp[i].addEventListener("click", function () {
    for (let k = 0; k < openUp.length; k++) {
      openUp[k].classList.remove("active");
    }
    this.classList.add("active");
    menu.classList.add("active");
  });
}
// openUp.addEventListener('click', function(){
//   menu.classList.add('active');

// })

closeUp.addEventListener("click", function () {
  menu.classList.remove("active");
});