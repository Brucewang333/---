$(function () {
  // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
  // 节流阀 互斥锁
  let flag = true;
  // 1.显示隐藏电梯导航
  let toolTop = $(".recommend").offset().top;
  function toggleTool() {
    if ($(document).scrollTop() >= toolTop) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }
  toggleTool();
  $(window).scroll(function () {
    toggleTool();
    // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
    if (flag) {
      $(".floor .w").each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
          // 只有一个类时 removeClass()里可以不用添加类名
        }
      });
    }
  });

  // 2. 点击电梯导航页面可以滚动到相应内容区域
  $(".fixedtool li").click(function () {
    flag = false;
    console.log($(this).index());
    //点击li 计算出页面需要滚动的scrollTop值
    // 选出对应索引号的内容去的盒子 计算它的.offset().top
    let current = $(".floor .w").eq($(this).index()).offset().top;
    // 页面滚动效果
    $("body,html").stop().animate({
          scrollTop: current,
        },function () {
          flag = true;
        });
    $(this).addClass("current").siblings().removeClass("current");
  });
});
