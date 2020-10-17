define(['common'], function (common) {
  function cartFun() {
    common.popOut()
    let lesses = document.querySelectorAll('.less')
    let mores = document.querySelectorAll('.more')
    let inputs = document.querySelectorAll('.count>input')
    let goodPrice = document.querySelector('#goodPrice span')
    let totalPrice = document.querySelector('#totalPrice span')
    let deleteButtons = document.querySelectorAll('.deleteButton')
    let total = 0
    lesses.forEach(less => {
      less.addEventListener('click', function () {
        if (less.nextElementSibling.value * 1 === 0) {
          return
        }
        less.nextElementSibling.value = less.nextElementSibling.value * 1 - 1 + ''
        less.parentElement.parentElement.nextElementSibling.innerHTML = '￥' + 690 * less.nextElementSibling.value * 1 + '.00'
        less.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '￥' + 690 * less.nextElementSibling.value * 1 + '.00'
        total = 0
        inputs.forEach(input => {
          total += input.value * 690
        })
        goodPrice.innerHTML = '￥' + total + '.00'
        totalPrice.innerHTML = '￥' + total + '.00'
      })
    })
  
    mores.forEach(more => {
      more.addEventListener('click', function () {
        more.previousElementSibling.value = more.previousElementSibling.value * 1 + 1 + ''
        more.parentElement.parentElement.nextElementSibling.innerHTML = '￥' + 690 * more.previousElementSibling.value * 1 + '.00'
        more.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '￥' + 690 * more.previousElementSibling.value * 1 + '.00'
        total = 0
        inputs.forEach(input => {
          total += input.value * 690
        })
        goodPrice.innerHTML = '￥' + total + '.00'
        totalPrice.innerHTML = '￥' + total + '.00'
      })
    })
  
    inputs.forEach(input => {
      input.addEventListener('blur', function () {
        if (!input.value) {
          input.value = '0'
        }
        input.parentElement.parentElement.nextElementSibling.innerHTML = '￥' + 690 * input.value * 1 + '.00'
        input.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '￥' + 690 * input.value * 1 + '.00'
        total = 0
        inputs.forEach(input => {
          total += input.value * 690
        })
        goodPrice.innerHTML = '￥' + total + '.00'
        totalPrice.innerHTML = '￥' + total + '.00'
      })
    })
  
    deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click', function () {
        if (deleteButton.parentElement.parentElement.parentElement.children.length === 1) {
          total = 0
          deleteButton.parentElement.parentElement.parentElement.removeChild(deleteButton.parentElement.parentElement)
        } else {
          deleteButton.parentElement.parentElement.parentElement.removeChild(deleteButton.parentElement.parentElement)
          total = 0
          inputs = document.querySelectorAll('.count>input')
          let arr = [...inputs]
          arr.forEach(input => {
            total += input.value * 690
          })
        }
        goodPrice.innerHTML = '￥' + total + '.00'
        totalPrice.innerHTML = '￥' + total + '.00'
      })
    })
  }
  return {
    cartFun
  }
});