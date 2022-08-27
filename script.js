playPause = document.querySelector(".itt");
aud = document.querySelector(".aud");
// itt2 = document.querySelector(".itt-2")

/* ============== playPause ============*/

playPause.addEventListener("click", function(){
  aud.classList.toggle('active');
   
  
  if(aud.classList.contains('active')){
    aud.play();
    playPause.classList.remove('fa-play')
    playPause.classList.add('fa-pause')
  }else {
    aud.pause();
    playPause.classList.remove('fa-pause')
    playPause.classList.add('fa-play')
  }
})
/* =========== pop_up ================ */
// const openPopUp = document.querySelector('.asdfefef');
// const closePopUp = document.querySelector('.pop_up_close');
// const popUp = document.querySelector('.pop_up');

// openPopUp.addEventListener('click', function(){
//   e.preventDefault();
//   console.log(openPopUp);
//   popUp.classList.add('active');
// })

// closePopUp.addEventListener('click',() => {
//   popUp.classList.remove('active');
// })







/* =========== pop_up ================ */
