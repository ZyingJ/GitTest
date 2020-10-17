require.config({
  paths:{
    list:'list'
  }
})

require(['list'],function(list){
  list.listFun()
})