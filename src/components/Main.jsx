import React from "react";
import "./main.scss";

const Main = () => {
  return (
    <div className="container">
      <section class="sc-visual">
        <div class="video-area">
          <video autoplay muted>
            <source src="./asset/video/toss-intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="img-area">
          <img
            src="./asset/images/toss-intro.jpeg"
            alt="비주얼 섹션 동영상 썸네일"
          />
        </div>
        <div class="bg"></div>
        <div class="content-area">
          <h2 class="sc-title">
            금융의 모든 것<br />
            <strong>토스</strong>에서 쉽고 간편하게
          </h2>
          <div class="download-area">
            <a href="" class="link-android">
              <img
                src="./asset/images/ico-ios.png"
                alt="애플 앱스토어 아이콘"
              />
              App Store
            </a>
            <a href="" class="link-ios">
              <img
                src="./asset/images/ico-android.png"
                alt="구글 플레이스토어 아이콘"
              />
              Google Play
            </a>
          </div>
        </div>
      </section>

      <section class="sc-info bgc-f">
        <div class="inner">
          <h2 class="sc-title">
            <p>내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.</p>
            <p>이제껏 경험 못 했던 쉽고 편리한 금융 서비스,</p>
            <p>토스와 함께라면 당신의 일상이 새로워질 거예요.</p>
          </h2>
        </div>
      </section>

      <section class="sc-about">
        <h2 class="blind">토스의 성장 기록</h2>
        <div class="bg"></div>
        <div class="inner">
          <ul class="about-list">
            <li class="about-item">
              <div class="content">
                <h3 class="item-title">누적 가입자 수</h3>
                <em class="item-num">
                  <span class="num">2200</span>만 +
                </em>
              </div>
            </li>
            <li class="about-item">
              <div class="content">
                <h3 class="item-title">누적 투자 금액</h3>
                <em class="item-num">
                  <span class="num">1</span>조 원 +
                </em>
              </div>
            </li>
            <li class="about-item">
              <div class="content">
                <h3 class="item-title">전체 팀원 수</h3>
                <em class="item-num">
                  <span class="num">1500</span>명 +
                </em>
              </div>
            </li>
            <li class="about-item">
              <div class="content">
                <h3 class="item-title">출시 서비스 수</h3>
                <em class="item-num">
                  <span class="num">50</span>개 +
                </em>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="sc-service">
        <h2 class="blind">토스에서 제공하는 서비스</h2>

        <div class="group-flex wire bgc-f">
          <div class="inner">
            <div class="title-area">
              <h3 class="title">송금</h3>
              <strong class="title-desc">
                간편하고 안전하게
                <br />
                수수료는 평생 무료로,
                <br />
                이런 송금 써보셨나요?
              </strong>
            </div>
            <div class="inner-s">
              <div class="wire-item">
                <div class="text-area">
                  <div class="group-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class=" "
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <g
                        fill="none"
                        stroke="#007ff2"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                      >
                        <path d="M16.25 8.92l-1.85 6.71c-.06.2-.34.2-.4 0l-1.8-6.56c-.06-.2-.34-.2-.4 0L10 15.63c-.06.2-.34.2-.4 0L7.75 8.92M15.3 12.35H18M8.7 12.35H6"></path>
                      </g>
                      <circle
                        cx="12"
                        cy="1.97"
                        r="1.98"
                        fill="#4d9cff"
                      ></circle>
                      <circle
                        transform="rotate(-60 3.313 6.985)"
                        cx="3.31"
                        cy="6.98"
                        fill="#74b6ff"
                        r="1.98"
                      ></circle>
                      <circle
                        transform="rotate(-30 3.312 17.015)"
                        cx="3.31"
                        cy="17.02"
                        fill="#007ff2"
                        r="1.98"
                      ></circle>
                      <circle
                        cx="12"
                        cy="22.03"
                        r="1.98"
                        fill="#4d9cff"
                      ></circle>
                      <circle
                        transform="rotate(-60 20.687 17.016)"
                        cx="20.69"
                        cy="17.02"
                        fill="#74b6ff"
                        r="1.98"
                      ></circle>
                      <circle
                        transform="rotate(-30 20.686 6.986)"
                        cx="20.69"
                        cy="6.98"
                        fill="#007ff2"
                        r="1.98"
                      ></circle>
                    </svg>
                    <span class="title">평생 무료 송금</span>
                  </div>
                  <div class="group-bottom">
                    <strong class="sub-title">
                      토스 평생 무료 송금으로
                      <br />
                      모두의 금융에 자유를
                    </strong>
                    <p class="desc">
                      누구에게 보내든 은행 상관 없이
                      <br />
                      이제 토스와 함께 수수료 걱정 없이 송금하세요.
                    </p>
                  </div>
                </div>
                <div class="img-area">
                  <img
                    src="./asset/images/service-wire-free.png"
                    alt="평생 무료 송금"
                  />
                </div>
              </div>
              <div class="wire-item">
                <div class="text-area">
                  <div class="group-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class=" "
                    >
                      <path
                        d="M11.6.7L2.9 4.2c-.4.2-.7.6-.7 1v8.3c0 3.8 4.8 7.5 9.3 9.8.3.1.6.1.9 0 4.5-2.3 9.3-6 9.3-9.8V5.2c0-.4-.2-.8-.6-.9L12.4.7c-.3-.1-.6-.1-.8 0z"
                        fill="#007ff7"
                      ></path>
                      <path
                        d="M10.9 15.8c-.3 0-.5-.1-.7-.3l-3.4-3.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.7 2.7 4.9-4.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.6 5.6c-.2.2-.4.3-.7.3z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <span class="title">사기 계좌 조회</span>
                  </div>
                  <div class="group-bottom">
                    <strong class="sub-title">
                      송금 전 사기 내역 조회로
                      <br />
                      피해를 미리 방지할 수 있어요
                    </strong>
                    <p class="desc">
                      송금 전 토스가 알아서 사기 내역 조회를 해 드려요.
                      <br />
                      상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
                      <br />
                      안전하게 송금할 수 있어요.
                    </p>
                  </div>
                </div>
                <div class="img-area">
                  <img
                    src="./asset/images/service-wire-warning.png"
                    alt="평생 무료 송금"
                  />
                </div>
              </div>
              <div class="wire-item">
                <div class="text-area">
                  <div class="group-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class=" "
                    >
                      <g fill-rule="evenodd" clip-rule="evenodd">
                        <path
                          d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5m0 21C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5"
                          fill="#afb7c0"
                        ></path>
                        <path
                          d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5"
                          fill="#fff"
                        ></path>
                        <path
                          d="M7.3 15.9c-.3 0-.6-.2-.8-.4-.3-.5-.2-1.1.3-1.4l4.7-3.2c.5-.3 1.1-.2 1.4.3.3.5.2 1.1-.3 1.4l-4.7 3.1c-.2.2-.4.2-.6.2"
                          fill="#ef4452"
                        ></path>
                        <path
                          d="M12 12.8c-.6 0-1-.4-1-1V6.6c0-.6.4-1 1-1s1 .4 1 1v5.2c0 .5-.4 1-1 1"
                          fill="#4e5968"
                        ></path>
                      </g>
                    </svg>
                    <span class="title">자동이체 예약</span>
                  </div>
                  <div class="group-bottom">
                    <strong class="sub-title">
                      은행 점검 시간,
                      <br />
                      기다릴 필요 없어요
                    </strong>
                    <p class="desc">
                      은행 점검 시간에는 자동이체 예약을 이용해 보세요.
                      <br />
                      점검 시간이 끝나면 토스가 알아서 송금해 드릴게요.
                    </p>
                  </div>
                </div>
                <div class="img-area">
                  <img
                    src="./asset/images/service-wire-free.png"
                    alt="평생 무료 송금"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-flex credit bgc-g">
          <div class="inner">
            <div class="title-area">
              <h3 class="title">신용</h3>
              <strong class="title-desc">
                금융 생활의 첫 걸음,
                <br />
                신용점수를 미리
                <br />
                무료로 관리하세요
              </strong>
            </div>
            <ul class="credit-list">
              <li class="credit-item">
                <div class="img-area">
                  <img
                    src="./asset/images/service-credit-score.png"
                    alt="신용점수 확인 이미지"
                  />
                </div>
                <div class="text-area">
                  <h4 class="sub-title">내 신용점수</h4>
                  <p class="desc">
                    언제 어디서든, 원할 때 간편하게
                    <br />
                    KCB, NICE 신용점수를 한 곳에서
                    <br />
                    확인할 수있어요.
                  </p>
                </div>
              </li>
              <li class="credit-item">
                <div class="img-area">
                  <img
                    src="./asset/images/service-credit-up.png"
                    alt="신용점수 올리기 이미지"
                  />
                </div>
                <div class="text-area">
                  <h4 class="sub-title">신용점수 올리기</h4>
                  <p class="desc">
                    통신비, 일반 납부내역 등의 서류를
                    <br />
                    토스에서 바로 제출해 신용점수를
                    <br />
                    올릴 수있어요.
                  </p>
                </div>
              </li>
              <li class="credit-item">
                <div class="img-area">
                  <img
                    src="./asset/images/service-credit-alarm.png"
                    alt="신용관리 알림 이미지"
                  />
                </div>
                <div class="text-area">
                  <h4 class="sub-title">신용관리 알림</h4>
                  <p class="desc">
                    신용점수에 변동이 생기면 토스가 알람을 보내드려요.
                    <br />
                    나의 신용점수가 바뀔 때마다 바로 확인하세요.
                  </p>
                </div>
              </li>
              <li class="credit-item">
                <div class="img-area">
                  <img
                    src="./asset/images/service-credit-tip.png"
                    alt="신용관리 팁 이미지"
                  />
                </div>
                <div class="text-area">
                  <h4 class="sub-title">신용관리 팁</h4>
                  <p class="desc">
                    신용점수 관리가 막막하다면?
                    <br />
                    신용관리 팁 콘텐츠를 한번 읽어보세요.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="group-flex loan bgc-f">
          <div class="inner">
            <div class="content-area">
              <div class="title-area">
                <h3 class="title">대출</h3>
                <strong class="title-desc">
                  여러 은행의 조건을
                  <br />
                  1분 만에
                  <br />
                  확인해보세요
                </strong>
              </div>
              <div class="img-area">
                <div class="img-box">
                  <div class="screen-img">
                    <img
                      src="./asset/images/service-loan1.png"
                      alt=""
                      id="tab-1"
                      class="active"
                    />
                    <img
                      src="./asset/images/service-loan2.png"
                      alt=""
                      id="tab-2"
                    />
                    <img
                      src="./asset/images/service-loan3.png"
                      alt=""
                      id="tab-3"
                    />
                  </div>
                  <div class="mock-up">
                    <img src="./asset/images/iphone-mockup.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="text-area">
                <div class="sub-title-area">
                  <span class="active" data-tab="tab-1">
                    나에게 맞는 대출을 조회하고,
                  </span>
                  <span data-tab="tab-2">간편하게 대출 심사를 받고,</span>
                  <span data-tab="tab-3">한눈에 보는 심사 결과까지.</span>
                </div>
                <p class="desc">
                  앉은 자리에서 여러 은행의 한도와 금리를 비교하고
                  <br />
                  내게 꼭 맞는 대출을 찾아보세요.
                  <br />
                  신용, 비상금, 대환, 주택담보대출 모두 가능해요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group-flex investment bgc-g">
          <div class="inner">
            <div class="title-area">
              <h3 class="title">투자</h3>
              <strong class="title-desc">
                투자,
                <br />
                모두가 할 수 있도록
              </strong>
            </div>
            <div class="inner-s">
              <div class="desc-area">
                <p>
                  이해하기 쉬운 용어
                  <br />
                  설명이 필요 없는
                  <br />
                  직관적인 화면 구성
                </p>
                <p>
                  송금처럼 쉬운 구매 경험
                  <br />
                  그리고 투자 판단에
                  <br />
                  도움을 주는 콘텐츠까지
                </p>
              </div>
              <div class="img-area">
                <div class="screen-img">
                  <img
                    src="./asset/images/service-investment-screen.png"
                    alt=""
                  />
                </div>
                <div class="ico-box">
                  <img
                    src="./asset/images/service-investment-icon1.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon2.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon3.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon4.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon5.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon6.png"
                    alt=""
                  />
                  <img
                    src="./asset/images/service-investment-icon7.png"
                    alt=""
                  />
                </div>
                <div class="mock-up">
                  <img src="./asset/images/iphone-mockup.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-vision bgc-f">
        <div class="inner">
          <div class="title-area">
            <h2 class="sc-title">토스가 바꿀 금융</h2>
            <p class="sub-title">모두를 위한, 새로운 금융을 만들고자 합니다</p>
          </div>
          <div class="inner-s">
            <ul class="vision-list">
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img1.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스코어</span>
                    <p class="desc">
                      상식적인 금융 서비스는
                      <br />
                      삶을 윤택하게 합니다
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img2.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스증권</span>
                    <p class="desc">
                      투자, 쉽게 즐길 수<br />
                      있는 문화가 됩니다
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img3.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스페이먼츠</span>
                    <p class="desc">
                      결제 산업의 새로운 미래를
                      <br />
                      제시합니다
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img4.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스인슈어런스</span>
                    <p class="desc">
                      궁극적인 목표는
                      <br />
                      고객이 만족하는 것
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img5.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스뱅크</span>
                    <p class="desc">
                      포용과 혁신의 은행을
                      <br />
                      지향합니다
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
              <li class="vision-item">
                <a href="">
                  <div class="bg-area">
                    <img src="./asset/images/vision-img6.jpeg" alt="" />
                  </div>
                  <div class="text-area">
                    <span class="team">토스씨엑스</span>
                    <p class="desc">
                      고객 경험을
                      <br />
                      최우선으로 생각합니다
                    </p>
                    <i class="fa-solid fa-plus">
                      <span class="blind">더 보기</span>
                    </i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="sc-investor bgc-g">
        <canvas class="canvas"></canvas>

        <div class="content">
          <h2 class="sc-title">세계적인 투자자들이 토스팀과 함께합니다</h2>
          <div class="rolling-area">
            <ul class="investor-list">
              <li class="investor-item">
                <img src="./asset/images/investor-img1.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img2.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img3.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img4.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img5.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img6.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img7.jpg" alt="" />
              </li>
              <li class="investor-item">
                <img src="./asset/images/investor-img8.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
