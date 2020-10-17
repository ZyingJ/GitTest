<?php
session_start();
require './config.php';

$username = $_POST['phone'];
$userpwd = $_POST["pwd"];

//对比数据库内容
$sql = "SELECT * FROM user WHERE `phone`='$username' AND `pwd`='$userpwd'";
$result = mysqli_query($connID, $sql);

//如果 sql 语句执行失败则打印
if (!$result) {
  printf("Error: %s\n", mysqli_error($connID));
  exit();
}



//数据查询成功把数据循环出来
$row = mysqli_fetch_array($result);

//如果查询到数据，表示当前账号存在，及密码正确
if ($row) {
  echo $_SESSION["url"];

  //把用户名 全局变量
  $_SESSION['uname'] = $row['username'];
  echo ($_SESSION['uname']);
  //跳转到个人中心
  echo ('<script type="text/javascript"> window.location.href = "../index.html";</script>');

  //失败表示用户名或者密码不正确
} else {
  echo ('<script type="text/javascript"> alert("手机号或者密码不正确！！");window.history.back(-1)</script>');
}
