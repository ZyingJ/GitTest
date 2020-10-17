define(function(require, factory) {
  function popOut(){
    let popOut = document.querySelector('#popOut')
    let ul = document.querySelector('#headerList>ul')
    ul.addEventListener('mouseover', function (event) {
        popOut.style.display = 'block'
        popOut.style.position = 'sticky'
        popOut.style.top = '80px'
      }, false);
    ul.addEventListener('mouseout', function (event) {
        popOut.style.display = 'none'
        popOut.style.position = 'absolute'
    }, false);
    
    popOut.addEventListener('mouseover', function (event) {
      popOut.style.display = 'block'
      popOut.style.position = 'sticky'
      popOut.style.top = '80px'
    }, false);
    popOut.addEventListener('mouseout', function (event) {
      popOut.style.display = 'none'
      popOut.style.position = 'absolute'
    }, false);
  }
  return {
    popOut
  }
});
