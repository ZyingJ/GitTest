require.config({
  paths:{
    register:'register'
  }
})

require(['register'],function(register){
  register.registerCheck()
})