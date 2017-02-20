/*画面の高さを取得*/
var h = document.documentElement.clientHeight;
/*スクロール量の取得*/
$(window).scroll(function(){ // スクロール毎にイベントが発火します。
        document.write('<img src="tune-top.jpg" class="bg1">');
   })
});
/* 0 < スクロール量 < height＊１   --->  一枚目*/
