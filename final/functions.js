function openWin(url,name,newWinWidth,newWinHeight){
    var winWidth=screen.width;  //获取屏幕宽度
    var winHeight=screen.height;  //获取屏幕高度
    //获取新窗口距离屏幕左侧的位置
    var left=(winWidth-newWinWidth)/2;  
    //获取新窗口距离屏幕顶部的位置
    var top=(winHeight-newWinHeight)/2;
    window.open(url,name,'width='+newWinWidth+',height='+newWinHeight+',left='+left+',top='+top+',toolbar=no,menubar=no,location=no,status=no');
    //name:弹出窗口的名字,可不填，用''代替
    //toolbar=no 是否显示工具栏。yes为显示
    //menubar=no 是否显示菜单栏。yes为显示
    //location=no 是否显示地址字段。yes为显示
    //status=no 是否添加状态栏。yes为可以
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
