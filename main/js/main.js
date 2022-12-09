// main.js

// 메인 배너 애니메이션

$(function () {
  let bgArr = [
    "main/images/main-visual1.jpg",
    "main/images/main-visual2.jpg",
    "main/images/main-visual3.jpg",
  ];

  let bnTitle_1 = ["언제나 함께", "Since 1963", "비타그란 비타민C"];
  let bnTitle_2 = [
    "건강한 생활 속에서<br>동아제약이 함께합니다",
    "당신의 피로회복제 박카스 <br> 다양한 박카스 제품을 비교해보세요!",
    "#비타민C #필수영양소 #취향맞춤비타민C <br> 언제 어디서나 비타민C의 생기를 가득 만나보세요",
  ];
  let bnTitle_3 = [
    "<a href='https://dmall.co.kr/product/index.html' style='color:var(--sub);'>공식몰 바로가기</a>",
    "<a href='http://www.bacchusd.com/' style='color:#1616B3'>박카스 바로가기</a>",
    "<a href='https://dmall.co.kr/product/list.html?cate_no=359' style='color:#CE2424'>비타그란 바로가기</a>",
  ];

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }

    $(".main_bn").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });

    $(".main_bn").css({
      transition: "1s",
      opacity: "1",
    });

    $(".main_bn_title h2").html(bnTitle_1[bg_img_num]);
    $(".main_bn_title h3").html(bnTitle_2[bg_img_num]);
    $(".main_bn_title p").html(bnTitle_3[bg_img_num]);
  }, 6000);
});

// 사이트맵 버튼

$(function () {
  $(".m_btn a").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn a").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});
