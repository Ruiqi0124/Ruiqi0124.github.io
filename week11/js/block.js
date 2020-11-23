//<Jquery Append> https://api.jquery.com/append/
//<Creat Element> https://www.w3schools.com/jsref/met_document_createelement.asp
//<Append Child> https://www.w3schools.com/jsref/met_node_appendchild.asp
//<Constructor> https://www.w3schools.com/js/js_object_constructors.asp
function Block() {
	this.upDivWrap = null;
	this.downDivWrap = null;
	this.downHeight = baseObj.randomNum(0,150);
	this.gapHeight = baseObj.randomNum(150,160);
	this.upHeight = 312 - this.downHeight - this.gapHeight;
	
	// 生成新的管道div
	this.createDiv = function(url, height, positionType, left, top) {
		var newDiv = document.createElement("div");
		newDiv.style.width = "62px";
		newDiv.style.height = height;
		newDiv.style.position = positionType;
		newDiv.style.left = left;
		newDiv.style.top = top;
		newDiv.style.backgroundImage = url;
		return newDiv;
	};
	
	this.createBlock = function() {
		var upDiv1 = this.createDiv("url(img/up_mod.png)", this.upHeight + "px");
		var upDiv2 = this.createDiv("url(img/up_pipe.png)", "60px");
		this.upDivWrap = this.createDiv(null, null, "absolute", "450px");
		this.upDivWrap.appendChild(upDiv1);
		this.upDivWrap.appendChild(upDiv2);//生成上方管道
		
		var downDiv1 = this.createDiv("url(img/down_pipe.png)", "60px");
		var downDiv2 = this.createDiv("url(img/down_mod.png)", this.downHeight +"px");
		this.downDivWrap = this.createDiv(null, null, "absolute", "450px", 363 - this.downHeight + "px");
		this.downDivWrap.appendChild(downDiv1);
		this.downDivWrap.appendChild(downDiv2); //生成下方的管道
		
		jqBackground.append(this.upDivWrap);
		jqBackground.append(this.downDivWrap);
	};
	
	this.moveBlock = function() { //控制管道移动
		this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + "px";
		this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + "px";
	};	
}
