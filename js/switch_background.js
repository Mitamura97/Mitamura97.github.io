$(function(){
  /*画面の高さを取得*/
var h = document.documentElement.clientHeight;
/*スクロール量の取得*/
$(window).scroll(function(){ // スクロール毎にイベントが発火
  var y = jquery(this).scrollTop();
document.write(y);
});

});
