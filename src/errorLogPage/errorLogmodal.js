import React, { useState } from "react";
import "./errorLogmodal.css";
import ContentTitle from "../content/ContentTitel";
import ErrorModal from "../component/errormodalpop";
import NameInput from "../component/nameinput";
import TextArea from "../component/textarea";

function ErrorLogModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <ContentTitle title="Error Log"></ContentTitle>
            <div className="left-frame">
              <React.Fragment>
                <button className="btn btn-color" onClick={openModal}>
                  모달팝업
                </button>
                <ErrorModal
                  open={modalOpen}
                  close={closeModal}
                  header="Error Popup"
                  main={
                    <div>
                      <div className="t1">
                        <label>이름</label>
                        <NameInput />
                        <label>내용</label>
                        <NameInput />
                      </div>
                      <div className="m1">
                        <label>날짜</label>
                        <NameInput />
                      </div>
                      <div className="b1">
                        <label>비고</label>
                        <TextArea />
                      </div>
                    </div>
                  }
                ></ErrorModal>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorLogModal;
