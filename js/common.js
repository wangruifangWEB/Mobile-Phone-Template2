function biglv() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
biglv();

$(function(){
  $(document).ready(function () {
    //初始化宽度、高度
    $(".header-mask-list").height($(window).height() - 35);
    //当文档窗口发生改变时 触发
    $(window).resize(function () {
    $(".header-mask-list").height($(window).height() - 35);
    });
  });
    
  // 导航内容显示与隐藏切换
  var i = 0;
  var $elem=$(".header-mask-list");
  $("#menu").click(function () {
    if (i == 0) {
      $elem.show();
      $elem.animate({right: '0'}, 500);
      i = 1;
    } else {
      $elem.animate({right: '-3.42rem'}, 500,function(){
        $elem.hide();
        i = 0;
      });
    }
  });

  if ($('.header-mask-list').not(":hidden")) {
    $('section').click(function () {
      $elem.animate({right: '-3.42rem'}, 500,function(){
        $elem.hide();
        i = 0;
      });
    })
  }
})



