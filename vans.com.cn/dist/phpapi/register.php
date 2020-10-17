<?php

session_start();
//导入配置文件
require './config.php';
error_reporting(5);
error_reporting(0);
//获取url传递值
$userpwd = $_POST['pwd'];
$phone = $_POST['phone'];

//判断用户是否输入值,当没输入时不让注册
if (!$userpwd || !$phone) {
  echo ('<script>alert("请输入对应的信息");window.history.back(-1)</script>');
} else {
  //判断手机号是否注册
  $query = "SELECT * FROM user WHERE `phone`='$phone'";
  $result = mysqli_query($connID, $query);
  $roe = mysqli_fetch_array($result);
  //如果查询到，则表示手机号已经呗注册了，返回上一层
  if ($roe) {
    echo ('<script>alert("手机号已被注册！请从新输入");window.history.back(-1)</script>');
  } else { //当没有查询到用户名，表示没有被注册。进行数据库写入
    //操作数据库
    $query = "INSERT INTO user(`pwd`,`phone`) VALUES('$userpwd','$phone')";
    $result = mysqli_query($connID, $query);
    if ($result) {
      //注册成功跳转到登录页面
      echo ('<script type="text/javascript">alert("注册成功"); window.location.href = "../login.html";</script>');
    } else {
      echo ('<script> aliert("注册失败")</script>');
    }
  }
}
