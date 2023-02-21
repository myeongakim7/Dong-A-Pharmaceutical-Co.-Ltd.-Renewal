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
  $(function () {
    $(".depth2 .depth2_ul .depth2_li").eq(0).on("click", normal);
    function normal() {
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
      $(".product-list .pro-ul .pro-li").css({ display: "none" });
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
    // 다이얼
    // 다이얼  p를 처음에 누르면 9개가 뜨게끔  / 11개임 - 9개 2개
    // 모바일은 총 6개로해서 2페이지씩 나눠지면 됨

    // let firstPage = document.querySelector(".leftMax");
    // console.log(firstPage);

    $(function () {
      $(".dial .numbers .page")
        .eq(0)
        .on("click", () => {
          $(".product-list .container .pro_ul").css({
            position: "absolute",
            top: "100px",
          });
        });
      $(".dial .numbers .page").eq(0).on("click", pageStyle1);
    });
    // pageStyle1 함수
    function pageStyle1() {
      $(".dial .numbers .page").eq(0).css({
        border: "1px solid var(--main)",
        backgroundColor: "var(--main)",
        color: "#fff",
      }),
        $(".dial .numbers .page").eq(1).css({
          border: "none",
          background: "none",
          color: "#000",
        });
    }
    //  pageStyle1 함수 끝

    $(function () {
      $(".dial .numbers .page")
        .eq(1)
        .on("click", () => {
          $(".product-list .container .pro_ul").css({
            position: "absolute",
            top: "-90%",
          });
        });

      $(".dial .numbers .page").eq(1).on("click", pageStyle2);
    });

    // pageStyle2 함수
    function pageStyle2() {
      $(".dial .numbers .page").eq(1).css({
        border: "1px solid var(--main)",
        backgroundColor: "var(--main)",
        color: "#fff",
      }),
        $(".dial .numbers .page").eq(0).css({
          border: "none",
          background: "none",
          color: "#000",
        });
    }
    //  pageStyle2 함수 끝
    // leftmax를 누르면 p의 첫번째로 이동한다
    // 버튼 onclick 이벤트 하기  => 함수 만들기
    $(function () {
      $(".dial .numbers .leftMax, .dial .numbers .left").on("click");
    });

    // 검색기능

    //     let itemArr = [];
    //     for (i = 0; i < 12; i++) {
    //       itemArr.push($(".product-list .pro_ul .pro-li").eq(`${i}`).text());
    //     }
    //     console.log(itemArr);
    // $('#search').on('click',search)
    // function search(){

    // }
  });
}

// 모바일 버전

if (screen.width < 769) {
  // 제품 검색
  // product.js
  $(function () {
    $(".depth2 .depth2_ul .depth2_li").eq(0).on("click", normal);
    function normal() {
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

    // 다이얼
    // 모바일은 총 6개로해서 2페이지씩 나눠지면 됨

    $(".dial .numbers .page")
      .eq(0)
      .on("click", () => {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "50px",
        });
      });

    $(".dial .numbers .page")
      .eq(1)
      .on("click", () => {
        $(".product-list .container .pro_ul").css({
          position: "absolute",
          top: "-90%",
        });
      });
  });
}
