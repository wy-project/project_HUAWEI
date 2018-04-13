<?php
	//header("content-type:text/html;charset=utf-8");
	$uname = $_GET["uname"];
	$upwd = $_GET["upwd"];
	
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("username",$db);
	mysql_query("set names utf8");
	//在数据库中查  是否有从登陆页返回的值
	$sql="SELECT * FROM `information` WHERE uname='$uname'";
	$res = mysql_query($sql);
	$arr=mysql_fetch_array($res);
	//echo $arr;
	
	
	$json=json_encode($arr);
	
	
	
	echo $json;
	
	
	//遍历从数据库中得到的数组；
	/*foreach($arr as $key =>$value){
		echo $key.":".$value."<br/>";
	}*/
	
	
	
	
	

?>