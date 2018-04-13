

window.onload = function(){	
	window.onload = function(){
		var login=document.getElementById("login");
		var str=document.cookie;
		login.innerHTML="欢迎登陆"+str;
		
		//console.log(str);
	}
	
	var s = new Show();
	s.move();
	s.down();	
	
	var s = new Shopcar();
	s.sport();
	s.down();
	
	var b = new Banner();
	b.reveal();
	var span = document.getElementById("slider").children;	
	var list = document.getElementById("main-banner-ul").children;
	var left = document.getElementById("arr-left");
	var right = document.getElementById("arr-right");
	//轮播图下面的小轮播
	var imove = document.getElementById("imove");
	var oRight = document.getElementById("end-right");
	var oLeft = document.getElementById("end-left");
	var oUl = document.getElementById("end-ul");
	
	function oMove(){
		var target = 0;
		oRight.onclick = function(){
			if(target == -410*12){
				target = -410*12;
			}else{
				target -= 410;
			}
			startMove(oUl,{left:target})
		}
		oLeft.onclick = function(){
			if(target == 0){
				target = 0;
			}else{
				target += 410;
			}
			startMove(oUl,{left:target})
		}
	}
	oMove();
	
	var index=0;
	var j=0;
	function play(){
		setInterval(function(){
			j++;
			if(j>=4){
				j=0;
					imove.style.top = 0; 
				
			}
			startMove(imove,{top:-48*j})
		},1500)		
	}
	play();
	var timer=setInterval(autoPlay,1500);
	function autoPlay(){
		
		index++;
		if(list.length == index){
			index = 0;
		}
		for(let i=0;i<list.length;i++){
			
			span[i].className = "";
			startMove(list[i],{opacity:0});//排他   让所有图片透明度为0					
		}		
		span[index].className = "current"
		startMove(list[index],{opacity:100});
	}
	for(let i=0;i<span.length;i++){
		span[i].onmouseover = function(){
			clearInterval(timer);
			index = i-1;
			autoPlay();
		}
		span[i].onmouseout = function(){
			timer=setInterval(autoPlay,1500);
		}
	}
	
	right.onclick = function(){
		clearInterval(timer);
		//index = i-1;
		autoPlay();
		timer=setInterval(autoPlay,1500);
		
	}
	left.onclick = function(){
		clearInterval(timer);
		if(index == 0){}
		autoPlay();
		timer=setInterval(autoPlay,1500);
	}
	
	/* obj  要操作的元素
	 json {attr:target} 
	 例：{
	 	width:500px,
	 	height:600px
	 }*/
		
	
	function startMove(obj,json){
		//先清定时器
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var current = 0;
			var flag = true;//值为true时，停止运动
			for(var attr in json){//遍历json里的属性
				if(attr == "opacity"){
					current = parseFloat(getStyle(obj,attr))*100;//当前的透明度
				}else if(attr == "zIndex"){
					current=parseInt(getStyle(obj,attr));//当前的z-index;
				}else{
					current = parseInt(getStyle(obj,attr));
				}
			
				
				var speed = (json[attr]-current)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(current != json[attr]){
					flag = false;
				}
				if(attr == "opacity"){
					obj.style[attr] = (current+speed)/100;
					
				}else if(attr == "zIndex"){
					obj.style[attr] = json[attr];
				}else{
					obj.style[attr] = current + speed + "px";
				}
				
			}
			if(flag){
					clearInterval(obj.timer);
				}
		},30)
	}
	
	
	
	//获取要操作的属性
	//obj  要操作的元素
	//attr 要获取的属性
	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(obj,false)[attr];			
		}else{
			return obj.currentStyle[attr];
		}
	}
	
}


//二级菜单
/*
 * 角色:corner
 * 	   属性：menu
 * 	   功能：鼠标移入显示
 * 			 鼠标移出隐藏
 */

	function Show(){
		this.body = document.getElementById("corner-menu");
		this.init = document.getElementById("secondary menu");
		this.move = function(){
			this.body.onmouseover = function(){
				this.reveal();
			}.bind(this)
		}
		
		this.down = function(){
			this.body.onmouseout = function(){
				this.hide();
			}.bind(this)
		}
		
		this.reveal = function(){//二级菜单显示
			this.init.style.display = "block";
		}
		this.hide = function(){//二级菜单隐藏
			this.init.style.display = "none";
		}
		
	}
	
//购物车运动
/*角色：购物车
		属性:div;
		功能：运动
		* */
	
	function Shopcar(){
		this.body = document.getElementById("shoplist");//角色：购物车
		this.init = document.getElementById("box");//属性：div
		this.span = document.getElementById("sp");
		//功能：运动
		this.sport = function(){				
				this.move();		
		}
		
		this.reveal = function(){
			this.init.style.display = "block";			
		}
		this.hide =function(){
			this.init.style.display = "none";
		}
		this.move = function(){
			this.body.onmouseover = function(){
				this.reveal();
				this.public(200,4);
			}.bind(this)						
		}
		this.down = function(){
			this.body.onmouseout = function(){
				
				//this.public(0,-4);
				this.hide();
			}.bind(this)
			
		}
		
		//this.timer = null;
		this.public = function(target,speed){
					//clearInterval(this.timer);
					this.timer=setInterval(function(){
					if(this.init.offsetHeight >= target){
						this.init.style.height ==target;
						clearInterval(this.timer);
					}else{
						this.init.style.height = this.init.offsetHeight+speed+"px";
					}
				}.bind(this),10)
				
			}
	}
	
	
/*banner内的二级菜单*/
function Banner(){
		this.body = document.getElementsByClassName("main-list");
		this.init = document.getElementById("main-nav-master-menu");
		//console.log(this.body);
		
		this.reveal = function(){
			
			for(var i = 0 ; i < this.body.length ; i++){
			this.body[i].onmouseover = function(){
				this.init.style.display = "block";
			}.bind(this)
			this.body[i].onmouseout = function(){
				this.init.style.display = "none";
			}.bind(this)
		}
			
		}
		
	}