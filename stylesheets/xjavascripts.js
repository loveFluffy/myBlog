function printHeader()
{
	document.write("<h1>This is h1</h1>");
	document.write("<p>This is p by document.write</p>");
}

function printFooter()
{
	document.write("<p>This is footer</p>");
}





function changePa()
{
	x=document.getElementById("test");
	x.innerHTML="Hello Java";
}
function changeColor()
{
	x=document.getElementById("test");
	x.style.color="#f00";
}

function varTest(strVar)
{
	var a="hello "+strVar, b='another var';
	alert(a);

	//声明数组
	var cars=new  Array();
	cars[0]="Audi";
	cars[1]="BMW";
	cars[2]="Volvo";

	var cars=["Audi","BMW","Volvo"];

	//声明对象
	var person={
		firstname : "Bill",
		lastname  : "Gates",
		id        :  5566
	};

	//对象属性寻址
	name=person.lastname;
	name=person["lastname"];

	//清空变量
	cars=null;
	person=null;
	
	//声明变量类型
	var carname=new String;
	var x=      new Number;
	var y=      new Boolean;
	var cars=   new Array;
	var person= new Object;

	//length函数
	var message="Hello World!";
	var x=length(message);
	var y=message.toUpperCase();
}

//有返回值的函数
function multiplexy(x,y)
{
	return x*y;
}

var thisVar=3; //函数外声明的为全局变量
//如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
//即使它在函数内执行。

//switch case
function switchcase()
{
	var day=new Date().getDay();
	switch (day)
	{
		case 6:
		x="Today it's Saturday";
		break;
		case 0:
		x="Today it's Sunday";
		break;
		default:
		x="Looking forward to the Weekend";
	}
}

//循环for
function forFunc()
{
	for (var i=0;i<cars.length;i++)
	{
		document.write(cars[i] + "<br>");
	}

	//循环for/in：遍历对象的属性
	var person={fname:"John",lname:"Doe",age:25};
	for (x in person)
	{
		txt=txt + person[x];
	}

}


//=========================================== DOM ===========================================//
//DOM: Document Object Model

// 通过 id 找到 HTML 元素
// 通过标签名找到 HTML 元素
// 通过类名找到 HTML 元素

//查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素
function getByFunc()
{
	var x=document.getElementById("main");
	var y=x.getElementsByTagName("p");
}



// 如何改变 HTML 元素的内容 (innerHTML)
// 如何改变 HTML 元素的样式 (CSS)
// 如何对 HTML DOM 事件对做出反应
// 如何添加或删除 HTML 元素

//onload & onunload 事件
// onload 和 onunload 事件会在用户进入或离开页面时被触发。
// onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
// onload 和 onunload 事件可用于处理 cookie。
function checkCookies()
{
	if (navigator.cookieEnabled==true)
	{
		alert("已启用 cookie")
	}
	else
	{
		alert("未启用 cookie")
	}
}
// <body onload="checkCookies()">


//onchange 事件
// onchange 事件常结合对输入字段的验证来使用。
// 下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。
function myFunction()
{
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
// 请输入英文字符：<input type="text" id="fname" onchange="myFunction()">
// <p>当您离开输入字段时，会触发将输入文本转换为大写的函数。</p>

//$(selector).action()
$(document).ready(function(){
	$("button").click(function(){
		$("p").hide();
	});
});
// $(this).hide() - 隐藏当前元素
// $("p").hide() - 隐藏所有段落
// $(".test").hide() - 隐藏所有 class="test" 的所有元素
// $("#test").hide() - 隐藏所有 id="test" 的元素



