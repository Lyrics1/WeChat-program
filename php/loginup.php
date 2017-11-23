<?php 
	include "DButil.php";
	header("Content-Type: text/html;charset=utf-8");
	$dbname="nodejs";
	$userName = $_POST['user'];
	$passWord = $_POST['password'];
	$tel = $_POST['tel'];
	$con = mysqli_connect($severname,$username,$password,$dbname);
	 if(!$con){
	 	echo 'Can not connect database';
	 }
	 $con->set_charset("utf8");//设置插入数据库的字符集
	$sql ="insert into users(name,pass)   values('".$userName."','".$passWord."')";

	
	$result = mysqli_query($con,$sql);

	if($result){
		echo "true";
	}
	else echo "false";
	


?>