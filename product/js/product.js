// 사이트맵 버튼

$(function () {
  $(".m_btn a").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn a").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});

// 제품 검색

// product.js

$(function () {
  $(".depth2 .depth2_ul .depth2_li a")
    .eq(0)
    .on("click", function () {
      $(".pro_ul .pro_li-2, .pro_li-3, .pro_li-4").addClass("none"),
        $(".pro_ul .pro_li-1").addClass("show");
      $(".pro_ul .pro_li-2").removeClass("show");
    });

  $(".depth2 .depth2_ul .depth2_li a")
    .eq(1)
    .on("click", function () {
      $(".pro_ul .pro_li-1, .pro_li-3, .pro_li-4").addClass("none"),
        $(".pro_ul .pro_li-2").addClass("show");
      $(".pro_ul .pro_li-1").removeClass("show");
      $(".pro_ul .pro_li-3").removeClass("show");
    });

  $(".depth2 .depth2_ul .depth2_li a")
    .eq(2)
    .on("click", function () {
      $(".pro_ul .pro_li-1, .pro_li-2, .pro_li-4").addClass("none"),
        $(".pro_ul .pro_li-3").addClass("show");
      $(".pro_ul .pro_li-1").removeClass("show");
      $(".pro_ul .pro_li-2").removeClass("show");
      $(".pro_ul .pro_li-4").removeClass("show");
    });

  $(".depth2 .depth2_ul .depth2_li a")
    .eq(3)
    .on("click", function () {
      $(".pro_ul .pro_li-1, .pro_li-2, .pro_li-3").addClass("none"),
        $(".pro_ul .pro_li-4").addClass("show");
      $(".pro_ul .pro_li-1").removeClass("show");
      $(".pro_ul .pro_li-2").removeClass("show");
      $(".pro_ul .pro_li-3").removeClass("show");
    });
});

// $(선택자).eq(순서).on('click',function(){$(제외할 것들).addclass('none'), $(당사자).addclass('show'); 나머지 다 클래스 빼주기})
