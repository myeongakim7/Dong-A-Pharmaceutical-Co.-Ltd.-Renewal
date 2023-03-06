// main.js

// 메인 배너 애니메이션

$(function () {
  let bgArr = [
    "main/images/main-visual1.jpg",
    "main/images/main-visual2.jpg",
    "main/images/main-visual3.jpg",
  ];

  let bnTitle_1 = [
    "Just to make you happy smile",
    "Since 1963",
    "비타그란 비타민C",
  ];
  let bnTitle_2 = [
    "That's the our motive",
    "당신의 피로회복제 박카스",
    "본연의 에너지에 충실한 비타민C의 기준",
  ];
  let bnTitle_3 = [
    "더 나은 삶에 대한 믿음, 하루를 새롭게 시작할 수 있는 에너지<br>동아제약이 함께 하겠습니다.",
    "오늘 하루도 힘을 냈던 당신,<br>스스로에게 작은 칭찬과 '박카스 한병' 선물하세요",
    "언제 어디서나 비타민C의 생기를 가득 느껴보세요<br> #비타민C #필수영양소 #취향맞춤비타민C ",
  ];
  let bnTitle_4 = [
    "<a href='https://dmall.co.kr/product/index.html'>공식몰 바로가기&nbsp;→</a>",
    "<a href='http://www.bacchusd.com/'>박카스 바로가기&nbsp;→</a>",
    "<a href='https://dmall.co.kr/product/list.html?cate_no=359'>비타그란 바로가기&nbsp;→</a>",
  ];

  // let bnTitle_4 = [
  //   "<a href='https://dmall.co.kr/product/index.html' style='color:var(--sub)'>공식몰 바로가기</a>",
  //   "<a href='http://www.bacchusd.com/' style='color:#101A39'>박카스 바로가기</a>",
  //   "<a href='https://dmall.co.kr/product/list.html?cate_no=359' style='color:#CE2424'>비타그란 바로가기</a>",
  // ];

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }

    $("#header-banner-wrap").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });

    $("#header-banner-wrap").css({
      transition: "1s",
      opacity: "1",
    });

    $(".main_bn_title h2").html(bnTitle_1[bg_img_num]);
    $(".main_bn_title h3").html(bnTitle_2[bg_img_num]);
    $(".main_bn_title h4").html(bnTitle_3[bg_img_num]);
    $(".main_bn_title p").html(bnTitle_4[bg_img_num]);
  }, 6000);
});

// hover 시 로고, 아이콘 이미지 변경
$(function () {
  $(".header").mouseover(function () {
    $(".logo a img").attr("src", "./main/images/main-logo.svg");
    $(".img_lang img").attr("src", "./main/images/icon-lang.svg");
    $(".m_btn a img").attr("src", "/main/images/icon-menu.svg");
  });
  $(".header").mouseout(function () {
    $(".logo a img").attr("src", "./main/images/main-logo-white.svg");
    $(".img_lang img").attr("src", "./main/images/icon-lang-white.svg");
    $(".m_btn a img").attr("src", "/main/images/icon-menu-white.svg");
  });
});

// 구글 번역 스크립트

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "ko",
//       includedLanguages: "ko,zh-CN,zh-TW,ja,vi,th,tl,km,my,mn,ru,en,fr,ar",
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//       autoDisplay: false,
//     },
//     "google_translate_element"
//   );
// }

// 사이트맵 버튼

$(function () {
  $(".m_btn a").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn a").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});

// product 이전 / 다음 버튼으로 이미지 넘기기

// 이미지 표시,비표시

$(function () {
  $("#next-btn").on("click", function () {
    $(".product-box .product1").removeClass("show"),
      $(".product-box .product1").addClass("none");
    $(".product-box .product2").removeClass("none"),
      $(".product-box .product2").addClass("show");
  });
});

$(function () {
  $("#pre-btn").on("click", function () {
    $(".product-box .product2").removeClass("show"),
      $(".product-box .product2").addClass("none");
    $(".product-box .product1").removeClass("none"),
      $(".product-box .product1").addClass("show");
  });
});
