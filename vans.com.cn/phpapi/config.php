<?php
error_reporting(5);
error_reporting(0);
  //用于链接数据库
  $hosr = '127.0.0.1';
  $name = 'root';
  $pwd = '123456';
  $dbname = 'vans';

  //与数据库进行链接
  $connID = mysqli_connect($hosr,$name,$pwd,$dbname);

  mysqli_query($connID,"ste names utf8");
  if(mysqli_select_db($connID,$dbname)) {
  }else{
    echo('数据库链接失败');
  }

?>