define(['common'], function(common) {
  function LoginCheck(){
    common.popOut()
    let loginBotton = document.querySelector('#loginButtom')
    let username = document.querySelector('#username')
    let password = document.querySelector('#password')
    
    loginBotton.addEventListener('click', function () {
      let xhr = new XMLHttpRequest()
      let formData = new FormData();
      formData.append('username', username.value);
      formData.append('password', password.value);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
          if(xhr.responseText !== ''){
            alert(xhr.responseText)
          }else{
            let origin = window.location.origin
            window.location.href = origin + '/index.html'
          }
        }
      }
      xhr.open("post", "./loginCheckInfo.php");
      xhr.send(formData);
    })
  }
  return {
    LoginCheck
  }
});