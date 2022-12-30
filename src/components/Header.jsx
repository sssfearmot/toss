import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <h1 className="logo">
          <a href="">
            <span className="blind">toss 토스</span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 453.07 120"
              className=" "
            >
              <path
                d="M124.25 59.34a54.37 54.37 0 00-53.4-48.06h-.6a54.58 54.58 0 00-27.31 7.35l-.41.25-.36.21C11.09 37.6 0 80.34 0 106.36l25-14.45c8.82 16.81 25.75 27.88 44.62 28.09h.6a53.62 53.62 0 006.3-.37 54.37 54.37 0 0047.73-60.29zM399.63 86.56c3.67 7.29 10.23 11.08 18.91 11.06 8.52 0 13.08-4.15 13.06-9 0-5.93-8.84-7.28-19.36-9.38-13.85-2.88-29.24-7.1-29.24-24.45 0-13.85 13.33-25.91 33.58-25.81 16.08 0 26.17 5.56 33.64 15.09L432.73 54.2c-3.36-5.47-8.55-8.65-16.16-8.63-8.22 0-12.17 3.38-12.16 8 0 5.17 6.72 6.52 18.75 9.08 13.71 2.7 29.86 7.38 29.91 25 0 12.79-11.35 27.27-35.25 27.19-18 .05-29.93-6.17-36.83-17.44zM324.52 86.56c3.68 7.29 10.23 11.08 18.91 11.06 8.52 0 13.08-4.15 13.07-9 0-5.93-8.85-7.28-19.36-9.38-13.86-2.86-29.25-7.08-29.29-24.43 0-13.85 13.32-25.91 33.57-25.81 16.09 0 26.17 5.56 33.65 15.09L357.62 54.2c-3.36-5.47-8.55-8.65-16.16-8.63-8.22 0-12.17 3.38-12.15 8 0 5.17 6.71 6.52 18.75 9.08 13.7 2.7 29.85 7.38 29.9 25 0 12.79-11.34 27.27-35.25 27.19-18 .05-29.93-6.17-36.82-17.44zM258.26 29a42.92 42.92 0 1042.92 42.9A42.93 42.93 0 00258.26 29zm0 65.81a22.89 22.89 0 1122.89-22.91 22.89 22.89 0 01-22.89 22.89zM204.23 89.13c-2.64 2.11-8.17 4.71-10.94 4.71-5.38 0-9.07-3.07-9.07-11.83V49.4h25.55V30.66h-25.55V0l-21.29 12.29v18.37h-17V49.4h17v34.52c0 22.6 10.54 30.9 27.9 30.9 7.68 0 17.93-4.55 23.3-8.54z"
                fill="#0064ff"
              ></path>
            </svg>
          </a>
        </h1>
        <div className="group-flex">
          <nav className="menu-area">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="">회사소개</a>
              </li>
              <li className="menu-item">
                <a href="">고객센터</a>
              </li>
              <li className="menu-item">
                <a href="">자주 묻는 질문</a>
              </li>
              <li className="menu-item">
                <a href="">토스인증서</a>
              </li>
              <li className="menu-item">
                <a href="">채용</a>
              </li>
            </ul>
          </nav>
          <div className="util-area">
            <button className="util-btn btn-kr active">
              KOR<span className="blind">한국어로 사이트 보기</span>
            </button>
            <button className="util-btn btn-en">
              ENG<span className="blind">영어로 사이트 보기</span>
            </button>
          </div>
        </div>
        <button className="m-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="m-menu"></div>
    </div>
  );
};

export default Header;
