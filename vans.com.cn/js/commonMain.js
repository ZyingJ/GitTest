require.config({
  paths:{
    common:'common'
  }
})

require(['common'],function(common){
  common.popOut()
})