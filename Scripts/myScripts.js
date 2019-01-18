document.getElementById("checkoutdiv").style.display = "none";

document.getElementById("products").onmouseover = function (event) {
	// Todo
	if(event.target.hasAttribute("src"))
	{
		changePic(event.target.parentNode.title.toLowerCase(),event.target);
	}
};

document.getElementById("checkout").onclick = function () {
	// Todo
	document.getElementById("checkoutdiv").style.display = "block";
	
	
};

document.getElementById("products").onclick = function (event) {
	// Todo
	var x=document.getElementsByTagName("ol");
	
	
	
	if(event.target.hasAttribute("src"))
{	
		var z= event.target.parentNode.children;
		var a=z[2].childNodes[0].nodeValue;
		var b=z[1].childNodes[1].childNodes[0].nodeValue
		var url="images/invalid.png";

		var l=document.createElement("li");
		var im=document.createElement("img");
		im.src=url;
		var t=document.createTextNode(" "+b+" "+a);
		var p1=document.createElement("p");
		p1.appendChild(im);
		p1.appendChild(t);
		
		l.appendChild(p1);
		
		x[0].appendChild(l);
		document.getElementById("noItemMsg").style.display = "none";
		

	}
};

document.getElementById("cart-content").onclick = function (event) {
	// Todo
var c=event.target;

if(c.hasAttribute("src"))
{
c.parentNode.parentNode.parentNode.removeChild(c.parentNode.parentNode);
}

var x=document.getElementsByTagName("ol");
if(x[0].children.length==1)
document.getElementById("noItemMsg").style.display = "inline";

};

document.getElementById("remove").onclick = function () {
	// Todo
	var x=document.getElementsByTagName("ol");
	document.getElementById("noItemMsg").style.display = "inline";
	
	while(x[0].children.length>1)
	x[0].removeChild(x[0].lastChild);


};

document.getElementById("submit").onclick = function () {
	// Todo
	xhttp=new XMLHttpRequest();
	var url="http://localhost:9876/cab";
	xhttp.open("POST",url,true);        
		xhttp.setRequestHeader('Content-Type','application/json;charset="UTF-8" ') ;
		xhttp.onreadystatechange = handleResponse;
		co=document.getElementById("cart-content").children;
		
		count=co[0].children.length;
		count--;
		//console.log(count);

		data={
			
			pwd: document.getElementById('txtPwd').value,
			name: document.getElementById('txtUserName').value,
      		noofLaptops: count
		};

		//console.log(data.noofLaptops);
		xhttp.send(JSON.stringify(data));
			 
		
		function handleResponse()
		{
			if(xhttp.readyState===4&&xhttp.status===200)
	   {response=xhttp.repsonse;
	   
	par=JSON.parse(xhttp.responseText);
	if(par["deliveryCity"]=="Unknown")
	{
		alert ("Wrong Credentials");
	}

	else
	{
		alert("Discount Amount "+par["discount"]+ "% for "+count+" item(s)");
	}
	
	   }
	   
		}

};

function changePic(name, elemImg) {
	var max = 3;
	var min = 1;

	var num = Math.floor(Math.random() * max - min + 1) + min;

	//elemImg.style.display="";
	elemImg.setAttribute("src", "laptops/" + name + "/" + name + "" + num + ".jpg");
}