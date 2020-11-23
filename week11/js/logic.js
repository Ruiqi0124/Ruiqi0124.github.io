//<Jquery Show and Hide> https://www.w3schools.com/jquery/jquery_hide_show.asp
//<Jquery .css> https://api.jquery.com/css/
//<Jquery .click> https://api.jquery.com/click/
//<array shift> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
//<remove child> https://www.w3schools.com/jsref/met_node_removechild.asp
//<sound> https://www.w3schools.com/graphics/game_sound.asp
var jqBackground = $("#Background")//背景的JQ
var jsBackground = document.getElementById("Background")//背景的JS
var jsHeadTitle = document.getElementById("headTitle")// 标题的JS
var jqHeadTitle = $("#headTitle")// 标题的JQ
var jqHeadBird = $("#headBird")// 标题鸟的JS
var blocksArr = []  //用来储存block的数组
var blockDistance = baseObj.randomNum(120,350)
		
var jqScore = $("#score")
var jqNum1 = $("#num1")
var jqNum2 = $("#num2")
var jqNum3 = $("#num3")
var score = 0
		
var jqGameOver = $("#gameOver")
var jqOkBtn = $("#ok")
var jqStartBtn = $("#startBtn")



function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
		this.sound.play();
	}
	this.stop = function(){
		this.sound.pause();
	  }
  }

var musicBg = new sound("sound/bgm.mp3")
var musicFail = new sound("sound/lose.mp3")
var musicFly = new sound("sound/poo.mp3")
var musicScore = new sound("sound/laser.mp3")
var SFX = true

function startMusic() {
  musicBg = new sound("sound/bgm.mp3");
  musicBg.play();
}

var Y = 3//标题摆动像素
var k = 0
var imgArr = ["img/bird0.png","img/bird1.png"] //用两帧不同画面做动画效果
var headWaveTimer = setInterval(headWave,200)//标题抖动计时器
function headWave() {
	Y *= -1
	jqHeadTitle.css("top", jsHeadTitle.offsetTop + Y + "px")//标题抖动
	jqHeadBird.attr("src", imgArr[k++])//标题小鸟抖动
	if (k == 2) {
		k = 0
	}
}

jqStartBtn.click (function() { //为start按键添加点击事件处理程序
	jqHeadTitle.hide() //隐藏标题
	jqStartBtn.hide() //隐藏按键
	bird.showBird(jsBackground) //插入小鸟到界面中
	bird.flyBird() //控制小鸟飞翔下落
	bird.wingWave()//逐帧动画，小鸟煽动翅膀
	jsBackground.onclick = function(){
	  bird.fallSpeed = -8
	  musicFly.play()
	}
	console.log(bird.fallSpeed++)
var newblock = new Block()
newblock.createBlock()//创建新管道
blocksArr.push(newblock)
jqNum1.show()
})
	
jqOkBtn.click (function() {
window.location.href = "index.html"//刷新页面
musicFly.play()
})

var jsGrassLand1 = document.getElementById("grassLand1") //草地1 JS
var jqGrassLand1 = $("#grassLand1") //草地1 JQ
var jsGrassLand2 = document.getElementById("grassLand2") //草地2 JS
var jqGrassLand2 = $("#grassLand2") //草地2 JQ		
var landTimer = setInterval(allStaff,30) //让草地动起来的定时器
	function allStaff() {//所有的游戏机制
		if (jsGrassLand1.offsetLeft <= -343) {//判断地面是否出框
			jqGrassLand1.css("left","343px")
		}
		if (jsGrassLand2.offsetLeft <= -343) {
			jqGrassLand2.css("left","343px")
		}
		jqGrassLand1.css("left",jsGrassLand1.offsetLeft - 3 + "px")
		jqGrassLand2.css("left",jsGrassLand2.offsetLeft - 3 + "px")
		if (blocksArr.length)	{	
		 for (var i = 0; i < blocksArr.length; i++) {
				blocksArr[i].moveBlock()
				var x =baseObj.rectangleCrashExamine(blocksArr[i].downDivWrap, bird.div)
				var y = baseObj.rectangleCrashExamine(blocksArr[i].upDivWrap, bird.div)
				var z = bird.div.offsetTop >= 390
	 	    if (x || y || z) { //判定碰撞上管道或下管道或地面
					clearInterval(landTimer)//地面停止移动
					jsBackground.onclick = null
					jqScore.css("left","180px")
					jqScore.css("top","200px")
					jqScore.css("z-index","5")//分数显示位置
					jqGameOver.show() // 显示结束界面
					musicFail.play()
					musicBg.stop()
				}
		}
		 if (blocksArr[blocksArr.length - 1].downDivWrap.offsetLeft < (450 - blockDistance)) {
				blockDistance = baseObj.randomNum(130,250)
				var newBlock = new Block()
				newBlock.createBlock()
				blocksArr.push(newBlock)
		}
				
		 if (blocksArr[0].downDivWrap.offsetLeft == -12) {
				score++//积分面板
				musicScore.play()
				if (score < 10) {
					jqNum1.css("background-image", "url(img/" + score + ".jpg)")
				} else if (score < 100) {
					jqNum2.show()
					jqNum1.css("background-image", "url(img/" + Math.floor(score/10) + ".jpg)")
					jqNum2.css("background-image", "url(img/" + score%10 + ".jpg)")
				} else if (score < 1000) {
					jqNum3.show()
					jqNum1.css("background-image", "url(img/" + Math.floor(score/100) + ".jpg)")
					jqNum2.css("background-image", "url(img/" + Math.floor(score/10) % 10+ ".jpg)")
					jqNum3.css("background-image", "url(img/" + score%10 + ".jpg)")
				}
				console.log(score)
		}
				
		 if (blocksArr[0].downDivWrap.offsetLeft < -50) {
			jsBackground.removeChild(blocksArr[0].downDivWrap)
			jsBackground.removeChild(blocksArr[0].upDivWrap)
			blocksArr.shift(blocksArr[0])
		}
	}
}






		