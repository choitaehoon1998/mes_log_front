import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./css/page.css";
export default function ErrorLogDetail() {
  const [detailInfo, setDetailInfo] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://a50b-175-119-149-98.ngrok.io/log/" + location.state.id)
      .then((response) => {
        setDetailInfo(response.data);
        console.log(detailInfo);
      })
      .catch((err) => console.log(err));
  }, [location.state.id]);
  return (
    <div className="content-wrap">
      <div className="content">
        <div className="defaultContainer">
          <div className="defaultTitle">회사코드</div>
          <div className="defaultContent">{detailInfo.companyCode}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">유저명</div>
          <div className="defaultContent">{detailInfo.userName}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">예외 클래스</div>
          <div className="defaultContent">{detailInfo.exceptionClass}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">예외 메시지</div>
          <div className="defaultContent">{detailInfo.exceptionMessage}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">원격 호스트 </div>
          <div className="defaultContent">{detailInfo.remoteHost}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">요청 uri</div>
          <div className="defaultContent">{detailInfo.requestUri}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">메소드 종류</div>
          <div className="defaultContent">{detailInfo.method}</div>
        </div>
        <div className="defaultContainer">
          <div className="defaultTitle">요청일시</div>
          <div className="defaultContent">{detailInfo.sendDateTime}</div>
        </div>
      </div>
    </div>
  );
}
