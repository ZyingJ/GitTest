require.config({
  paths:{
    cart:'cart'
  }
})

require(['cart'],function(cart){
  cart.cartFun()
})