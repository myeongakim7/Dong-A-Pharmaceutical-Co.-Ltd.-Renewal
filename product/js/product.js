// 사이트맵 버튼

$(function () {
  $(".m_btn a").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn a").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});

if (screen.width > 768) {
  // 제품 검색
  // product.js
  $(function () {
    $(".depth2 .depth2_ul .depth2_li").eq(0).on("click", normal);
    function normal() {
      $(".product-list .pro_ul").css({
        top: 0,
        height: "-100%",
      });
      $(".product-list .container").css({ height: "1500px" });
      $(".product-list .pro_ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(1).on("click", except);
    function except() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(2).on("click", food);
    function food() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul  .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "block" });
    }
    $(".depth2 .depth2_ul .depth2_li").eq(3).on("click", life);
    function life() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "block" });
    }
  });
}

// 모바일 버전

if (screen.width < 769) {
  // 제품 검색
  // product.js
  $(function () {
    $(".depth2 .depth2_ul .depth2_li").eq(0).on("click", normal);
    function normal() {
      $(".product-list .pro_ul").css({
        top: 0,
        height: "-100%",
      });
      $(".product-list .container").css({ height: "1500px" });
      $(".product-list .pro_ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(1).on("click", except);
    function except() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(2).on("click", food);
    function food() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul  .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "block" });
    }
    $(".depth2 .depth2_ul .depth2_li").eq(3).on("click", life);
    function life() {
      $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "block" });
    }
  });
}
