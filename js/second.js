window.onload = function(){
	
	var img1 = document.getElementById("img-1");
	var box1 = document.getElementById("product-relative");
	var middleBox = document.getElementById("product-nav");
	var box2 = document.getElementById("product-nav").children;
	var img2 = document.getElementById("img-2");
	var box3 = document.getElementsByClassName("product-box")[0];
	var od1 = document.getElementById("od1");
	var od2 = document.getElementById("od2");
	
	var box = document.getElementById("product-gallery");
	var father = document.getElementById("product-div");
	var arr = ["../open/428_428_1513329848684.jpg","../open/428_428_1513329847980.jpg","../open/428_428_1513329851527.jpg","../open/428_428_1513329850509.jpg","../open/428_428_1513329849792.jpg"]
	var brr = ["../open/800_800_1513329848684.jpg","../open/800_800_1513329847980.jpg","../open/800_800_1513329851527.jpg","../open/800_800_1513329850509.jpg","../open/800_800_1513329849792.jpg"]
	for(var i=0;i<box2.length;i++){
		box2[i].index = i;
		box2[i].onmouseover = function(){
			
			for(var j=0;j<box2.length;j++){
				imgSrc = arr[this.index];
				od2.style.backgroundImage = "url("+imgSrc+")";
				
				
			}
			this.className = "list";
			img2.src=brr[this.index];
			img1.src=arr[this.index];
		}
	}
	box1.onmouseover = function(){
		od2.style.display = "block";
		box3.style.display = "block";
		
	}
	box1.onmouseout = function(){
		od2.style.display = "none";
		box3.style.display = "none";
		
		
	}
	box1.onmousemove = function(e){
		var e = e || event;
		var x = e.pageX - father.offsetLeft - od2.offsetWidth/2;
		var y = e.pageY - father.offsetTop - od2.offsetHeight/2;
		
		var maxL = father.offsetWidth - od2.offsetWidth - 2;
		var maxT = father.offsetHeight - od2.offsetHeight - 2;
		
		x = x < 0 ? 0 : (x > maxL ? maxL : x);
		y = y < 0 ? 0 : (y > maxT ? maxT : y);
		
		od2.style.left = x + "px";
		od2.style.top = y + "px";
		
		var img2Left = x*img2.offsetWidth/box.offsetWidth;
		var img2Top = y*img2.offsetHeight/box.offsetHeight;
		
		img2.style.left = -img2Left + "px";
		img2.style.top = -img2Top + "px";
		
		od2.style.backgroundPositionX = -x+"px";
		od2.style.backgroundPositionY = -y+"px";
	}
	
	
	
	
	
	
	
}
