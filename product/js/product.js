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
        position: "absolute",
        top: "100px",
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

  // 다이얼
  $(function () {
    $(".dial .numbers p")
      .eq(0)
      .on("click", function () {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "100px",
        });
      });
    $(".dial .numbers p")
      .eq(1)
      .on("click", function () {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "-88%",
        });
      });
    // leftMax
    $(".dial .numbers .leftMax").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "100px",
      });
    });
    // left
    $(".dial .numbers .left").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "100px",
      });
    });
    // rightMax
    $(".dial .numbers .rightMax").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "-88%",
      });
    });
    // right
    $(".dial .numbers .right").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "-88%",
      });
    });
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
        position: "absolute",
        top: "50px",
      });
      // $(".product-list .container").css({ height: "500px" });
      $(".product-list .pro_ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(1).on("click", except);
    function except() {
      // $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "block" });
    }

    $(".depth2 .depth2_ul .depth2_li").eq(2).on("click", food);
    function food() {
      // $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul  .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "block" });
    }
    $(".depth2 .depth2_ul .depth2_li").eq(3).on("click", life);
    function life() {
      // $(".product-list .container").css({ height: "1000px" });
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-1").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-2").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-3").css({ display: "none" });
      $(".product-list .pro_ul .pro_li-4").css({ display: "block" });
    }
  });

  // 다이얼
  $(function () {
    $(".dial .numbers p")
      .eq(0)
      .on("click", function () {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "0px",
          left: "0px",
        });
      });
    $(".dial .numbers p")
      .eq(1)
      .on("click", function () {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "-88%",
        });
      });
    // leftMax
    $(".dial .numbers .leftMax").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
      });
    });
    // left
    $(".dial .numbers .left").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
      });
    });
    // rightMax
    $(".dial .numbers .rightMax").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "-88%",
      });
    });
    // right
    $(".dial .numbers .right").on("click", function () {
      $(".product-list .container .pro_ul").css({
        position: "absolute",
        top: "-88%",
      });
    });
  });
}
