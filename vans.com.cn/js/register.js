// define(['common'], function(common) {
//   function registerCheck(){
//     common.popOut()
//     let phone = document.querySelector('#phone')
//     let password = document.querySelector('#password')
//     let passwordReapeat = document.querySelector('#passwordReapeat')
//     let checkCode = document.querySelector('#checkCode')
//     let register = document.querySelector('#register')
    
//     register.addEventListener('click', function () {
//       let xhr = new XMLHttpRequest()
//       let formData = new FormData();
//       formData.append('phone', phone.value);
//       formData.append('password', password.value);
//       formData.append('passwordReapeat', passwordReapeat.value);
//       formData.append('checkCode', checkCode.value);
    
//       xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//           if(xhr.responseText !== ''){
//             alert(xhr.responseText)
//           }else{
//             let origin = window.location.origin
//             window.location.href = origin + '/login.html'
//           }
//         }
//       }
//       xhr.open("post", "./registerCheckInfo.php");
//       xhr.send(formData);
//     })
//   }
//   return {
//     registerCheck
//   }
// });