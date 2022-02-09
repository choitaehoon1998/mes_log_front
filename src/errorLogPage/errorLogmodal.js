import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorModal from "../component/errormodalpop";
import ErrorInput from "../component/errorinput";
import TextArea from "../component/textarea";

function ErrorLogModal(props) {
  const [modalOpen, setModalOpen] = useState(false); //모달오픈
  const [detailInfo, setDetailInfo] = useState([]); //axios 로그조회

  // 모달 열고 닫기할때 로그 불러오기
  const openModal = async () => {
    await axios
      .get("http://a50b-175-119-149-98.ngrok.io/log/" + props.state.id)
      .then((response) => {
        setDetailInfo(response.data);
      })
      .catch((err) => console.log(err));
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <React.Fragment>
        {detailInfo && (
          <button className="btn btn-color" onClick={openModal}>
            lookup
          </button>
        )}
        <ErrorModal
          open={modalOpen}
          close={closeModal}
          header="Error Popup"
          main={
            <div className="main-sec">
              <div className="t1">
                <label>회사코드</label>
                <ErrorInput errorData={detailInfo.companyCode} />
                <label>유저명</label>
                <ErrorInput errorData={detailInfo.userName} />
              </div>
              <div className="m1">
                <label>예외 클래스</label>
                <ErrorInput errorData={detailInfo.exceptionClass} />
              </div>
              <div className="m2">
                <label>예외 메세지</label>
                <TextArea errorData={detailInfo.exceptionMessage} />
              </div>
              <div className="m3">
                <label>원격 호스트</label>
                <ErrorInput errorData={detailInfo.remoteHost} />
                <label>요청 url</label>
                <ErrorInput errorData={detailInfo.requestUri} />
              </div>
              <div className="b1">
                <label>메소드 종류</label>
                <ErrorInput errorData={detailInfo.method} />
                <label>요청일시</label>
                <ErrorInput errorData={detailInfo.sendDateTime} />
              </div>
            </div>
          }
        ></ErrorModal>
      </React.Fragment>
    </>
  );
}

export default ErrorLogModal;
