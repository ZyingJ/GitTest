require.config({
  paths:{
    login:'login'
  }
})

require(['login'],function(login){
  login.LoginCheck()
})