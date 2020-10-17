

define(['common'], function(common) {
  function swiper(){
    common.popOut()
    let swiperInner = document.querySelector('#swiperInner')
    let pointers = document.querySelectorAll('#swiper ul li')
    let left = swiperInner.style.left * 1
    pointers[0].style.backgroundColor = 'white'
    function autoPlay() {
      pointers.forEach(pointer => {
        pointer.style.backgroundColor = 'black'
      })
      left -= 1440;
      if (left === 0) {
        pointers[0].style.backgroundColor = 'white'
      }
      if (left === -1440) {
        pointers[1].style.backgroundColor = 'white'
      }
      if (left === -2880) {
        left = 0
        pointers[0].style.backgroundColor = 'white'
      }
      swiperInner.style.left = left + 'px';
    }
    let time = setInterval(autoPlay, 2000)
    
    swiperInner.addEventListener('mouseover', function () {
      clearInterval(time)
    }, false)
    swiperInner.addEventListener('mouseout', function () {
      time = setInterval(autoPlay, 2000)
    }, false)
    
    pointers.forEach((pointer, index) => {
      pointer.addEventListener('click', function () {
        clearInterval(time)
        if (index === 0) {
          pointers[0].style.backgroundColor = 'white'
          pointers[1].style.backgroundColor = 'black'
          swiperInner.style.left = 0 + 'px'
        } else {
          pointers[1].style.backgroundColor = 'white'
          pointers[0].style.backgroundColor = 'black'
          swiperInner.style.left = -1440 + 'px'
        }
        time = setInterval(autoPlay, 2000)
      })
    })
  }
  return {
    swiper
  }
});