<?php
	header("content-type:text/html;charset=utf-8");
	//接受客户端请求的数据
	$uname = $_POST["uname"];
	$upwd = $_POST["upwd"];
	$reupwd=$_POST["reupwd"];
	//将接受到的数据传到数据库
	if($upwd===$reupwd){
		$db=mysql_connect("localhost","root","root");
		mysql_select_db("username",$db);
		mysql_query("set names utf8");
		//操作数据库
		$sql="INSERT INTO `information`( `uname`, `upwd`) VALUES ('$uname','$upwd' )";
		$row=mysql_query($sql);
		//echo $row;
		
		if($row){
			echo "<script>alert('注册成功');location.href='login.html';</script>";
		}else{
			echo "<script>alert('注册失败');</script>";
		}
	
		
		
		
	}
	
	
?>