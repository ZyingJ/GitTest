require.config({
  paths:{
    index:'index'
  }
})

require(['index'],function(index){
  index.swiper()
})